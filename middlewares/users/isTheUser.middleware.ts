import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import RoleModel from "../../models/users/role.model";
import UserModel from "../../models/users/user.model";

async function isTheUser(req:Request, res:Response, next:NextFunction) {

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

        const { id: idLoggedUser } = user.dataValues;
        const { id_user } = req.params;
        if(idLoggedUser == id_user || user.role.name == String(process.env.ADMIN_PREFIX)){
            next();
        } else {
            return res.status(403).send({
                "msg": "No tenés permisos para realizar esta acción"
            })
        }
        
        
        
    } catch (error) {
        return res.status(403).send({
            "msg": "Token inválido",
            error
        })
    }

   
}

export default isTheUser;
