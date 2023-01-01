import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/users/user.model";

async function userExists(id: number = 0){

    const exists = await UserModel.findByPk(id);


    if(!exists){
        throw new Error(`El usuario con id ${id} no existe`);
    }
}

export default userExists;