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
const role_model_1 = __importDefault(require("../models/users/role.model"));
class Role {
    constructor(data) {
        this.name = "";
        this.avatar = "";
        this.setName(data.name);
        this.setAvatar(data.avatar || "");
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.roleExists(this.getName());
            if (exists)
                return `Rol ${this.getName()} ya existe`;
            const saveRole = new role_model_1.default(this);
            saveRole.save();
            return saveRole;
        });
    }
    getID() {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield this.roleExists(this.getName());
            if (!exists)
                return false;
            this.setId(exists.id);
            return this.getId();
        });
    }
    roleExists(role_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield role_model_1.default.findOne({
                where: { name: role_name }
            });
            return exists;
        });
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAvatar() {
        return this.avatar;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
exports.default = Role;
//# sourceMappingURL=Role.js.map