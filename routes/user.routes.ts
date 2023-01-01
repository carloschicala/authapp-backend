import { Router } from "express";
import UserController from "../controllers/user.controller";
import { check } from "express-validator";
import noErrors from "../middlewares/noErrors.middleware";
import emailAlreadyExists from "../middlewares/emailAlreadyExists.middleware";
import isAdmin from "../middlewares/users/isAdmin.middleware";
import userExists from "../middlewares/users/userExists.middleware";

const router = Router();

const controller: UserController = new UserController()

/**
 * Get all users
 */
router.get('/', isAdmin, controller.getAllUsuarios)



/**
 * Register User
 */
router.post('/',
 [
    check('email', 'El email es obligatorio').notEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(emailAlreadyExists),
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('lastname', 'El apellido es obligatorio').notEmpty(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    noErrors
],
 controller.postUsuario)

export default router