import { Request, Response } from "express";
import Role from "../classes/Role";
import PasswordHelper from "../helpers/password.helper";
import emailAlreadyExists from "../middlewares/emailAlreadyExists.middleware";
import noErrors from "../middlewares/noErrors.middleware";
import UserModel from "../models/users/user.model";

class UserController{

    public async getAllUsuarios(req:Request, res:Response) {
        
        const users =  await UserModel.findAll();
        res.json(users)
    }


    public async postUsuario(req:Request, res:Response) {
        
        const { body } = req;

        try {
            body.password = new PasswordHelper().hash(body.password);

            const role = await new Role({ name: String(process.env.USER_PREFIX) }).getID();
            body.id_role = role;

            const user = new UserModel(body);
            await user.save()

            

            res.json({
                msg: 'El usuario se creo con exito',
                body
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'No se pudo cresar el usuario'
            })
        }
    }

}

export default UserController