import express, { Application } from 'express';
import db from '../db/db';
import cors from "cors";

import userRoutes from "../routes/user.routes"
import roleRoutes from "../routes/role.routes"
import authRoutes from "../routes/auth.routes";
import messageRoutes from "../routes/message.routes";


import RoleInterface from '../interfaces/role.interface';
import Role from '../classes/Role';
import Administrator from '../classes/Users/Administrator';
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        roles: '/api/roles',
        auth: '/api/auth',
        messages: '/api/messages'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.initDB();
        this.middlewares();
        this.sync();
        this.routes();
        this.init();
        
    }

    async sync() {
        await db.sync({ alter: true });
    }
    

    async init(){
        const role: RoleInterface = {
            name: "administrator"
        };
        
        const role_to_save = new Role(role);
        const save = await role_to_save.save();
    
        const admin = new Administrator({
            email: "admin@admin.com",
            password: "1234",
            name: process.env.ADMIN_NAME,
            lastname: process.env.ADMIN_LASTNAME
        });
    
        await admin.save();
    }


    private async initDB(){
        try {

            await db.authenticate();
            console.log("Database Online");

        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        // Cors
        const corsOptions = {
            credentials: true,
            origin: '*'
        }
        this.app.use(cors(corsOptions));
        this.app.use(express.json());
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log('Server running at', this.port);
        })
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.roles, roleRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.messages, messageRoutes);
    }

}

export default Server;