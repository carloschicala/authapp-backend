"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const sequelize_1 = require("sequelize");
// import Role from "./roles.model";
const User = db_1.default.define('user', {
    // id:{
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    email: { type: sequelize_1.DataTypes.STRING },
    name: { type: sequelize_1.DataTypes.STRING },
    lastname: { type: sequelize_1.DataTypes.STRING },
    password: { type: sequelize_1.DataTypes.STRING },
    avatar: { type: sequelize_1.DataTypes.STRING }
}, {
    timestamps: false
});
exports.default = User;
// const Role = db.define('role', {
//     id:{
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {type: DataTypes.STRING},
//     avatar: {type: DataTypes.STRING}
// },
// {
//     timestamps: false
// }
// );
// Role.hasOne(User);
// User.belongsTo(Role);
//# sourceMappingURL=user.model.js.map