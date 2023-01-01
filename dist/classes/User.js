"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(user) {
        this.setEmail(user.email);
        this.setPassword(user.password);
        this.setName(user.name || "");
        this.setLastname(user.lastname || "");
        this.setAvatar(user.avatar || "");
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
}
//# sourceMappingURL=User.js.map