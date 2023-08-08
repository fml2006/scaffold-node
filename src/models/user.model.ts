import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        password: { type: String, required: true},
        email: { type: String, required: true, unique:true},
        roleId: [{ type: Schema.Types.ObjectId, required: true, ref: 'Role' }],
        description: { type: String, required: false, default: 'No description' },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const UserModel = model('users', UserSchema); //Nombre de la collection y de que shcema es alimentado 
export default UserModel;