import jwt from "jsonwebtoken";
import UserModel from "../models/users/user.model";

class JWTHelper{

    public generateToken ( uid: string = '' )  {

        return new Promise( (resolve, reject) => {
    
            const payload = { uid };
    
            jwt.sign(payload, "SUPER_SECRET_PASSWORD", {
                // expiresIn: '1w'
            }, (err, token) => {
                if(err) reject('No se pudo generar el token');
                resolve(token);
            });
    
        } )
    
    }

    public async verifyToken(token: string){

        const { uid }= jwt.verify( token, "SUPER_SECRET_PASSWORD" );
    
        const user = await UserModel.findByPk(uid);

        if(!user){
            return false;
        }

        return user;
    }

}


export default JWTHelper;
