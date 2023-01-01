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
class User {
    constructor(user) {
        this.setEmail(user.email);
        this.setPassword(user.password);
        this.setName(user.name || "");
        this.setLastname(user.lastname || "");
        this.setAvatar(user.avatar || "");
    }
    exists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield user_model_1.default.findOne({
                where: { email }
            });
            if (exists) {
                return true;
            }
            else {
                return false;
            }
            ;
        });
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLastname() {
        return this.lastname;
    }
    setLastname(lastname) {
        this.lastname = lastname;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getAvatar() {
        return this.avatar;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    getId_role() {
        return this.id_role;
    }
    setId_role(id_role) {
        this.id_role = id_role;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map