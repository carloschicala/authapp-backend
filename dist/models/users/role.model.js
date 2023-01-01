"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../db/db"));
const sequelize_1 = require("sequelize");
const RoleModel = db_1.default.define('role', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    avatar: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false
});
exports.default = RoleModel;
//# sourceMappingURL=role.model.js.map