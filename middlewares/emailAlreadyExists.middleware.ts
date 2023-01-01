import { NextFunction, Request, Response } from "express";
import UserModel from "../models/users/user.model";

async function emailAlreadyExists(email: string = ""){

    const exists = await UserModel.findOne({
        where: {
            email
        }
    });

    if(exists){
        throw new Error(`El email ${email} ya existe`);
    }
}

export default emailAlreadyExists;