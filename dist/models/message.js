"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const sequelize_1 = require("sequelize");
const MessageModel = db_1.default.define('message', {
    body: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false
});
exports.default = MessageModel;
//# sourceMappingURL=message.js.map