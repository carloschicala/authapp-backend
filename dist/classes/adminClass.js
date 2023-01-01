"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserClass_1 = __importDefault(require("./UserClass"));
class Admin extends UserClass_1.default {
    constructor(lastname = '', name = '', email = '', password = '', avatar = '') {
        super(lastname, name, email, password, avatar);
    }
    save() {
        //TODO: Verificar que no exista un administrador, en ese caso guardarlo.
        return false;
    }
}
exports.default = Admin;
//# sourceMappingURL=adminClass.js.map