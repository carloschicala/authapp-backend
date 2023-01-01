"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
class UserClass {
    constructor(lastname = '', name = '', email = '', password = '', avatar = '') {
        this.setLastname(lastname);
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.setAvatar(avatar);
    }
    save() {
        try {
            const user = new user_model_1.default(this);
            user.save();
            return user;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    // private hashPassword(){
    // }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getLastname() {
        return this.lastname;
    }
    setLastname(lastname) {
        this.lastname = lastname;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
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
}
exports.default = UserClass;
//# sourceMappingURL=UserClass.js.map