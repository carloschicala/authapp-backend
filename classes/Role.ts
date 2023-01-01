import RoleInterface from "../interfaces/role.interface";
import RoleModel from "../models/users/role.model";

class Role {

    private name: string = "";
    private avatar: string = "";

    constructor(data: RoleInterface){
        this.setName(data.name);
        this.setAvatar(data.avatar || "");
    }

    public async save(): Promise<any>  {

        const exists = await this.roleExists(this.getName());
        if(exists) return `Rol ${this.getName()} ya existe`;

        const saveRole = new RoleModel(this);
        saveRole.save();
        return saveRole;

    }

    public async getID(){

        const exists: Role | any = await this.roleExists(this.getName());
        if(!exists) return false;
        
        this.setId(exists.id);
        return this.getId();

    }

    private async roleExists(role_name: string){

        const exists = await RoleModel.findOne({
            where: { name: role_name }
        });

        return exists;

    }


    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAvatar(): string {
        return this.avatar;
    }

    public setAvatar(avatar: string): void {
        this.avatar = avatar;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }


}

export default Role;