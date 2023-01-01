import { Request, Response, Router } from "express";
import UserController from "../controllers/user.controller";
import { check } from "express-validator";
import noErrors from "../middlewares/noErrors.middleware";
import emailAlreadyExists from "../middlewares/emailAlreadyExists.middleware";
import isAdmin from "../middlewares/users/isAdmin.middleware";
import userExists from "../middlewares/users/userExists.middleware";
import validToken from '../middlewares/users/validToken.middleware';
import MessageModel from '../models/message';
import UserModel from '../models/users/user.model';
import jwt from "jsonwebtoken";

const router = Router();

router.get('/',  async(req: Request, res: Response) => {

    const messages = await MessageModel.findAll({
        include: UserModel,
        order: [
            ['id', 'DESC']
        ],
    });

    return res.send(messages);

})

router.post('/', [
    validToken,
    check('body', "El campo  'body' es obligatorio").notEmpty(),
    noErrors
], async (req: Request, res: Response) => {

    const { body } = req.body;

    const token = req.header("Authorization");

    const { uid } = jwt.verify( token, "SUPER_SECRET_PASSWORD" );

    const user = await UserModel.findByPk(uid);

    //return res.send({body, user});
    req.body.id_user = user.id;

    const message = await new MessageModel(req.body);
    await message.save();

    return res.send({
        msg: "Mensaje enviado con exito",
        message
    })

});

export default router