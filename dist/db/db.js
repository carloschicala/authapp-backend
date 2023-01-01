"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let db;
const db_name = process.env.DB_NAME || 'authDB';
const user = process.env.DB_USER || 'postgres';
const password = process.env.DB_PASSWORD || 'admin';
const host = process.env.DB_HOST || 'localhost';
try {
    db = new sequelize_1.Sequelize(db_name, user, password, {
        host, dialect: 'postgres',
    });
}
catch (error) {
    throw new Error("No se pudo conectar con la base de datos");
}
exports.default = db;
//# sourceMappingURL=db.js.map