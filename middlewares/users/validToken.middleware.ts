import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../../models/users/user.model";
import RoleModel from "../../models/users/role.model";

async function validToken(req:Request, res:Response, next:NextFunction) {

    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({
            msg: "No hay token de autorización"
        });
    }

    try {

        const { uid } = jwt.verify( token, "SUPER_SECRET_PASSWORD" );

        const user = await UserModel.findByPk(uid, {
            include: {
                model: RoleModel
            }
        });

        if(!user){
            return res.status(404).send({
                "msg": "El usuario no existe"
            })
        }

        next();

    } catch (error) {
        return res.status(403).send({
            "msg": "Token inválido"
        })
    }

   
}

export default validToken;
