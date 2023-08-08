import { Schema, model } from "mongoose";
import { IRole } from "../interfaces/role.interface";

const RoleSchema = new Schema<IRole>(
    {
        name: { type: String, required: true },
        description: { type: String, required: false, default: 'No description' },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const RoleModel = model('roles', RoleSchema); //Nombre de la collection y de que schema es alimentado 
export default RoleModel;