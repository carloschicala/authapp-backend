import { Router } from "express";
import UserController from "../controllers/user.controller";
import { check } from "express-validator";
import noErrors from "../middlewares/noErrors.middleware";
import emailAlreadyExists from "../middlewares/emailAlreadyExists.middleware";
import AuthController from "../controllers/auth.controller";
import userExists from "../middlewares/users/userExists.middleware";
import isTheUser from "../middlewares/users/isTheUser.middleware";

const router = Router();

const controller: AuthController = new AuthController()

/**
 * Login
 */
router.post('/login', [
    check('user', "campo 'user' no debe estar vacío").notEmpty(),
    check('password', "campo 'password' no debe estar vacío").notEmpty(),
    noErrors
] ,controller.login)

/**
 * Verify Token
 */
router.post('/verify-token', controller.verifyToken)

/**
 * Change Password
 */
router.put('/change-password/:id_user', [
    check('id_user', "parámetro 'id_user' no debe estar vacío").notEmpty(),
    check('id_user', "parámetro 'id_user' debe ser numérico").isNumeric(),
    check('id_user').custom(userExists),

    check('password', "El campo 'password' no debe estar vacío").notEmpty(),
    check('password', "La contraseña debe tener al menos 3 caracteres").isLength({ min: 3 }),
    noErrors,
    isTheUser
], controller.changePassword)

export default router