import UserInterface from "../../interfaces/user.interface";
import UserModel from "../../models/users/user.model";

abstract class User {

    private id_role: number;
    private email: string;
    private name: string;
    private lastname: string;
    private password: string;
    private avatar: string;

    constructor(user: UserInterface){
        this.setEmail(user.email);
        this.setPassword(user.password);
        this.setName(user.name || "");
        this.setLastname(user.lastname || "");
        this.setAvatar(user.avatar || "");
    }

    public abstract save(): any;

    public async exists(email: string): Promise<boolean>{

        const exists = await UserModel.findOne({
            where: {email}
        });

        if(exists) { return true } else { return false };
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLastname(): string {
        return this.lastname;
    }

    public setLastname(lastname: string): void {
        this.lastname = lastname;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getAvatar(): string {
        return this.avatar;
    }

    public setAvatar(avatar: string): void {
        this.avatar = avatar;
    }

    public getId_role(): number {
        return this.id_role;
    }

    public setId_role(id_role: number): void {
        this.id_role = id_role;
    }



}

export default User