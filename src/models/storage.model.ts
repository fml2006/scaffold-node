import { Schema, model } from "mongoose";
import { IStorage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<IStorage>({
    fileName: {type:String},
    path:{type:String},
    idUser:{type:String}
});

const StorageModel = model('courses', StorageSchema); //Nombre de la collection y de que shcema es alimentado 
export default StorageModel;