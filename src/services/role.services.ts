import { IRole } from "../interfaces/role.interface";
import RoleModel from "../models/role.model";

const insertRole = async (role: IRole) => {
    try {
        return await RoleModel.create(role);
    } catch (error) {
        throw error;
    }
}

const obtainRoles = async () => {
    try {
        return await RoleModel.find();
    } catch (error) {
        throw error;
    }
}

const obtainRole = async (id: string) => {
    try{
        return await RoleModel.findById(id);
    } catch (error) {
        throw error;
    }
}

export { insertRole, obtainRoles, obtainRole };