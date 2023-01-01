"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/users/user.model"));
class JWTHelper {
    generateToken(uid = '') {
        return new Promise((resolve, reject) => {
            const payload = { uid };
            jsonwebtoken_1.default.sign(payload, "SUPER_SECRET_PASSWORD", {
            // expiresIn: '1w'
            }, (err, token) => {
                if (err)
                    reject('No se pudo generar el token');
                resolve(token);
            });
        });
    }
    verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const { uid } = jsonwebtoken_1.default.verify(token, "SUPER_SECRET_PASSWORD");
            const user = yield user_model_1.default.findByPk(uid);
            if (!user) {
                return false;
            }
            return user;
        });
    }
}
exports.default = JWTHelper;
//# sourceMappingURL=jwt.helper.js.map