import { Request, Response, Router } from "express";
import UserController from "../controllers/user.controller";
import { check } from "express-validator";
import noErrors from "../middlewares/noErrors.middleware";
import emailAlreadyExists from "../middlewares/emailAlreadyExists.middleware";
import RoleInterface from "../interfaces/role.interface";
import RoleModel from "../models/users/role.model";
import Role from "../classes/Role";
import UserInterface from "../interfaces/user.interface";
import User from "../classes/Users/User";
import Administrator from "../classes/Users/Administrator";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    
});



export default router