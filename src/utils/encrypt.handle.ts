import { hash, compare } from "bcryptjs";

const encrypt = async (pass:string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
}

const verifield = async (pass: string, passHash: string) => {
    const isValid  = await compare(pass, passHash);
    return isValid;
}
export { encrypt, verifield };