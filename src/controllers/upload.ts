import {Request, Response} from "express"
import { handleHttp } from "../utils/error.handler"
import { registerUpload } from "../services/storage.services"
import { RequestExt } from "../interfaces/requestExt.interface"
import { IStorage } from "../interfaces/storage.interface"


const upload = async (req: RequestExt, res:Response) =>{
    try{
        const { user, file } = req;
        const dataToRegister:IStorage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataToRegister)
    } catch (e) {
        handleHttp(res, "Error")
    }
}

export {upload}