"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const noErrors_middleware_1 = __importDefault(require("../middlewares/noErrors.middleware"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const userExists_middleware_1 = __importDefault(require("../middlewares/users/userExists.middleware"));
const isTheUser_middleware_1 = __importDefault(require("../middlewares/users/isTheUser.middleware"));
const router = (0, express_1.Router)();
const controller = new auth_controller_1.default();
/**
 * Login
 */
router.post('/login', [
    (0, express_validator_1.check)('user', "campo 'user' no debe estar vacío").notEmpty(),
    (0, express_validator_1.check)('password', "campo 'password' no debe estar vacío").notEmpty(),
    noErrors_middleware_1.default
], controller.login);
/**
 * Verify Token
 */
router.post('/verify-token', controller.verifyToken);
/**
 * Change Password
 */
router.put('/change-password/:id_user', [
    (0, express_validator_1.check)('id_user', "parámetro 'id_user' no debe estar vacío").notEmpty(),
    (0, express_validator_1.check)('id_user', "parámetro 'id_user' debe ser numérico").isNumeric(),
    (0, express_validator_1.check)('id_user').custom(userExists_middleware_1.default),
    (0, express_validator_1.check)('password', "El campo 'password' no debe estar vacío").notEmpty(),
    (0, express_validator_1.check)('password', "La contraseña debe tener al menos 3 caracteres").isLength({ min: 3 }),
    noErrors_middleware_1.default,
    isTheUser_middleware_1.default
], controller.changePassword);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map