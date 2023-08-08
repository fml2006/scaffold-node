import { Request, Response } from "express";
import { insertRole, obtainRole, obtainRoles } from "../services/role.services";
import { handleHttp } from "../utils/error.handler";

const getRoles = async (req: Request, res: Response) => {
    try{
        const data = await obtainRoles();
        res.send({data});
    }catch(err){
        handleHttp(res, 'Error getRoles', err)
    }
}

const getRole = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const data = await obtainRole(id);
        res.send({data});
    }catch(err){
        handleHttp(res, 'Error getRole', err)
    }
}

const createRole = async ( { body } : Request, res: Response) => {
    try{
        const responseRole = await insertRole(body);
        res.send({responseRole});
    }catch(err){
        handleHttp(res, 'Error createRole', err)
    }
}


export { getRoles, getRole, createRole };