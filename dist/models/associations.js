"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_model_1 = __importDefault(require("./users/role.model"));
const user_model_1 = __importDefault(require("./users/user.model"));
const message_1 = __importDefault(require("./message"));
user_model_1.default.sync();
role_model_1.default.sync({ alter: true });
message_1.default.sync();
user_model_1.default.belongsTo(role_model_1.default, {
    foreignKey: 'id_role',
    targetKey: 'id'
});
role_model_1.default.hasOne(user_model_1.default, {
    foreignKey: 'id_role',
    sourceKey: 'id'
});
message_1.default.belongsTo(user_model_1.default, {
    foreignKey: 'id_user',
    targetKey: 'id'
});
user_model_1.default.hasOne(message_1.default, {
    foreignKey: 'id_user',
    sourceKey: 'id'
});
//# sourceMappingURL=associations.js.map