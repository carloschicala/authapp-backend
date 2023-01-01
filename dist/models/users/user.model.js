"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../db/db"));
const sequelize_1 = require("sequelize");
const role_model_1 = __importDefault(require("./role.model"));
const UserModel = db_1.default.define('user', {
    email: { type: sequelize_1.DataTypes.STRING },
    name: { type: sequelize_1.DataTypes.STRING },
    lastname: { type: sequelize_1.DataTypes.STRING },
    password: { type: sequelize_1.DataTypes.STRING },
    id_role: { type: sequelize_1.DataTypes.INTEGER }
}, {
    defaultScope: {
        attributes: { exclude: ['password', 'id_role'] },
        include: role_model_1.default
    },
    scopes: {
        password: {
            attributes: { include: ['password'], exclude: ['id_role'] },
            include: role_model_1.default,
        }
    },
    timestamps: false
});
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map