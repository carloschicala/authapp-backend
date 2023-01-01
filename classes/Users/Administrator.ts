import UserInterface from "../../interfaces/user.interface";
import UserModel from "../../models/users/user.model";
import PasswordHelper from "../../helpers/password.helper";
import Role from "../Role";
import User from "./User";

class Administrator extends User {

    constructor(user: UserInterface){
        super(user);
    }

    public async save(){

        const exists = await this.exists(this.getEmail());

        if(exists){
            return `Ya existe el usuario con email ${this.getEmail()}`;
        }

        const role_id = await new Role({name: "administrator"}).getID();

        this.setId_role(role_id);

        const hash_password = new PasswordHelper().hash(this.getPassword());

        this.setPassword(hash_password);

        console.log(this);
        
        const admin = new UserModel(this);
        admin.save();

    }

}

export default Administrator