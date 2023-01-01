"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const express_validator_1 = require("express-validator");
const noErrors_middleware_1 = __importDefault(require("../middlewares/noErrors.middleware"));
const emailAlreadyExists_middleware_1 = __importDefault(require("../middlewares/emailAlreadyExists.middleware"));
const isAdmin_middleware_1 = __importDefault(require("../middlewares/users/isAdmin.middleware"));
const router = (0, express_1.Router)();
const controller = new user_controller_1.default();
/**
 * Get all users
 */
router.get('/', isAdmin_middleware_1.default, controller.getAllUsuarios);
/**
 * Register User
 */
router.post('/', [
    (0, express_validator_1.check)('email', 'El email es obligatorio').notEmpty(),
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    (0, express_validator_1.check)('email').custom(emailAlreadyExists_middleware_1.default),
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').notEmpty(),
    (0, express_validator_1.check)('lastname', 'El apellido es obligatorio').notEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').notEmpty(),
    noErrors_middleware_1.default
], controller.postUsuario);
exports.default = router;
//# sourceMappingURL=user.routes.js.map