
import db from "../db/db";
import { DataTypes } from "sequelize";

const MessageModel = db.define('message', {
    
    body: {type: DataTypes.STRING}
    
},
{
    timestamps: false
}
);

export default MessageModel;
