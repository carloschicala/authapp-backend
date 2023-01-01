import bcrypt from "bcrypt";
import generator from "generate-password";

class PasswordHelper{

    public hash(password: string, salt = 10): string{
        return bcrypt.hashSync(password, salt);
    }

    public generate(length: number = 10, numbers: boolean = true){
        const password = generator.generate({
            length,
            numbers
        });

        return password;

    }

    public verify(password: string, encrypted: string){

        const validPassword = bcrypt.compareSync(password, encrypted);

        return validPassword;

    }

}

export default PasswordHelper;