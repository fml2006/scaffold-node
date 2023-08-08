import { IAuth } from '../interfaces/auth.interface';
import { IUser } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { encrypt, verifield } from '../utils/encrypt.handle';
import { generateToken } from '../utils/jwt.handle';
import { obtainRole } from './role.services';

const registerUser = async ({email, password, name, roleId }: IUser ) => {
    const checkIs = await UserModel.findOne({email}); // check if user exists
    if (checkIs) return 'User already exists';
    const passHash = await encrypt(password); // encrypt password
    const registerUser = await UserModel.create({
        email,
        password: passHash,
        name,
        roleId
    });
    return registerUser;
}

const loginUser = async ({email, password}: IAuth) => {
    const user = await UserModel.findOne({email}); // check if user exists
    if (!user) return 'User not exists';

    const passHash = user.password;
    const isValid = await verifield(password, passHash); 
    if (!isValid) return 'Password Incorrect';

    // Consultar el rol del usuario
    const role = await obtainRole(user.roleId);
    if (!role) return 'Role not exists';

    const token = generateToken( user.email, role.name )
    const data = {
        token,
        userId: user._id,
        userName: user.name,
        userEmail: user.email,
        userRole: user.roleId,
        userRoleName: role.name,
        userDescription: user.description
    }
    return data;
}

export { registerUser, loginUser }