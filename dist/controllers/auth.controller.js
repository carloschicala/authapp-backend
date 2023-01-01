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
const jwt_helper_1 = __importDefault(require("../helpers/jwt.helper"));
const password_helper_1 = __importDefault(require("../helpers/password.helper"));
const user_model_1 = __importDefault(require("../models/users/user.model"));
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user: email, password } = req.body;
            const user = yield user_model_1.default.scope('password').findOne({
                where: {
                    email
                }
            });
            if (!user) {
                return res.status(404).send({
                    msg: "Usuario no existe"
                });
            }
            const validPassword = new password_helper_1.default().verify(password, user.password);
            if (!validPassword) {
                return res.status(404).send({
                    msg: "Contraseña inválida"
                });
            }
            const token = yield new jwt_helper_1.default().generateToken(user.id);
            return res.json({
                token,
                user
            });
        });
    }
    verifyToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header("Authorization");
            if (!token) {
                return res.status(401).json({
                    msg: "No hay token de autorización"
                });
            }
            try {
                const valid = yield new jwt_helper_1.default().verifyToken(token);
                console.log(valid);
                if (!valid) {
                    return res.status(404).send({
                        "msg": "El usuario no existe"
                    });
                }
                return res.send({ user: valid });
            }
            catch (error) {
                return res.status(403).send({
                    "msg": "Token inválido"
                });
            }
        });
    }
    changePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = req.params;
            const { password } = req.body;
            const hash_password = new password_helper_1.default().hash(password);
            const user = yield user_model_1.default.findByPk(id_user);
            const update = yield (user === null || user === void 0 ? void 0 : user.update({
                password: hash_password
            }));
            res.json("Contraseña reestablecida con éxito");
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map