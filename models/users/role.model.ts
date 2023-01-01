
import db from "../../db/db";
import { DataTypes } from "sequelize";

const RoleModel = db.define('role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {type: DataTypes.STRING}
    
},
{
    timestamps: false
}
);

export default RoleModel;
