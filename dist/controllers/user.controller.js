"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Role_1 = __importDefault(require("../classes/Role"));
const password_helper_1 = __importDefault(require("../helpers/password.helper"));
const user_model_1 = __importDefault(require("../models/users/user.model"));
class UserController {
    getAllUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_model_1.default.findAll();
            res.json(users);
        });
    }
    postUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                body.password = new password_helper_1.default().hash(body.password);
                const role = yield new Role_1.default({ name: String(process.env.USER_PREFIX) }).getID();
                body.id_role = role;
                const user = new user_model_1.default(body);
                yield user.save();
                res.json({
                    msg: 'El usuario se creo con exito',
                    body
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    msg: 'No se pudo cresar el usuario'
                });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map