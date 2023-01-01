
import db from "../../db/db";
import { DataTypes } from "sequelize";
import RoleModel from "./role.model";

const UserModel = db.define('user', {

    email: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    id_role: {type: DataTypes.INTEGER}
},
{
    defaultScope: {
        attributes: { exclude: ['password', 'id_role'] },
        include: RoleModel
    },
    scopes: {
        password: {
            attributes: { include: ['password'], exclude: ['id_role'] },
            include: RoleModel,
            
        }
    },
    timestamps: false
}
);

export default UserModel;