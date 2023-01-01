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
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const noErrors_middleware_1 = __importDefault(require("../middlewares/noErrors.middleware"));
const validToken_middleware_1 = __importDefault(require("../middlewares/users/validToken.middleware"));
const message_1 = __importDefault(require("../models/message"));
const user_model_1 = __importDefault(require("../models/users/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield message_1.default.findAll({
        include: user_model_1.default,
        order: [
            ['id', 'DESC']
        ],
    });
    return res.send(messages);
}));
router.post('/', [
    validToken_middleware_1.default,
    (0, express_validator_1.check)('body', "El campo  'body' es obligatorio").notEmpty(),
    noErrors_middleware_1.default
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req.body;
    const token = req.header("Authorization");
    const { uid } = jsonwebtoken_1.default.verify(token, "SUPER_SECRET_PASSWORD");
    const user = yield user_model_1.default.findByPk(uid);
    //return res.send({body, user});
    req.body.id_user = user.id;
    const message = yield new message_1.default(req.body);
    yield message.save();
    return res.send({
        msg: "Mensaje enviado con exito",
        message
    });
}));
exports.default = router;
//# sourceMappingURL=message.routes.js.map