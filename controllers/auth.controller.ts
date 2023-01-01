import { Request, Response } from "express";
import User from "../classes/Users/User";
import JWTHelper from "../helpers/jwt.helper";
import generateToken from "../helpers/jwt.helper";
import PasswordHelper from "../helpers/password.helper";
import UserInterface from "../interfaces/user.interface";
import UserModel from "../models/users/user.model";

class AuthController {

    public async login(req: Request, res: Response){

        const { user: email, password } = req.body;

        const user: UserInterface | any = await UserModel.scope('password').findOne({
            where: {
                email
            }
        });
    

        if(!user){
            return res.status(404).send({
                msg: "Usuario no existe"
            })
        }

        const validPassword: boolean = new PasswordHelper().verify(password, user.password);

        if(!validPassword){
            return res.status(404).send({
                msg: "Contraseña inválida"
            })
        }

        const token = await new JWTHelper().generateToken(user.id);

        return res.json({
            token,
            user
        })

    }

    public async verifyToken(req: Request, res: Response){
        const token = req.header("Authorization");
        
        if(!token){
            return res.status(401).json({
                msg: "No hay token de autorización"
            });
        }

        try {

            const valid = await new JWTHelper().verifyToken(token);
            console.log(valid);
    
            if(!valid){
                return res.status(404).send({
                    "msg": "El usuario no existe"
                })
            }

            return res.send({user: valid});

            
            
        } catch (error) {
            return res.status(403).send({
                "msg": "Token inválido"
            })
        }

    }

    public async changePassword(req: Request, res: Response){

        const { id_user } = req.params;
        const { password } = req.body;
        const hash_password = new PasswordHelper().hash(password);

        const user = await UserModel.findByPk(id_user);

        const update = await user?.update({
            password: hash_password
        });

        res.json("Contraseña reestablecida con éxito");

    }

}

export default AuthController