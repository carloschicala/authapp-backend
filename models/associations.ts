import RoleModel from "./users/role.model";
import UserModel from "./users/user.model";
import User from "./users/user.model";
import MessageModel from './message';

UserModel.sync();
RoleModel.sync({alter: true});
MessageModel.sync();

UserModel.belongsTo(RoleModel, {
    foreignKey: 'id_role',
    targetKey: 'id'
});

RoleModel.hasOne(UserModel, {
    foreignKey: 'id_role',
    sourceKey: 'id'
});

MessageModel.belongsTo(UserModel, {
    foreignKey: 'id_user',
    targetKey: 'id'
})

UserModel.hasOne(MessageModel, {
    foreignKey: 'id_user',
    sourceKey: 'id'
})