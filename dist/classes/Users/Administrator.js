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
const user_model_1 = __importDefault(require("../../models/users/user.model"));
const password_helper_1 = __importDefault(require("../../helpers/password.helper"));
const Role_1 = __importDefault(require("../Role"));
const User_1 = __importDefault(require("./User"));
class Administrator extends User_1.default {
    constructor(user) {
        super(user);
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.exists(this.getEmail());
            if (exists) {
                return `Ya existe el usuario con email ${this.getEmail()}`;
            }
            const role_id = yield new Role_1.default({ name: "administrator" }).getID();
            this.setId_role(role_id);
            const hash_password = new password_helper_1.default().hash(this.getPassword());
            this.setPassword(hash_password);
            console.log(this);
            const admin = new user_model_1.default(this);
            admin.save();
        });
    }
}
exports.default = Administrator;
//# sourceMappingURL=Administrator.js.map