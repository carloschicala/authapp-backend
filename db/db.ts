import { Sequelize } from 'sequelize';

let db: Sequelize;

const db_name: string = process.env.DB_NAME || 'authDB';
const user: string = process.env.DB_USER || 'postgres';
const password: string = process.env.DB_PASSWORD || 'admin';
const host: string = process.env.DB_HOST || 'localhost';


try {

    
    db = new Sequelize(db_name, user, password, {
        host, dialect: 'postgres',
    });
} catch (error) {
    throw new Error("No se pudo conectar con la base de datos")
}

export default db;