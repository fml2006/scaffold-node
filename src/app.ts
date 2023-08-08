import 'dotenv/config' 
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo';

const app = express();
app.use(cors()); // permite que cualquier cliente se conecte a nuestra api
app.use(express.json()); // permite que express entienda los objetos json y reciba los datos que se envia en el body
app.use(router);
db().then(() => console.log('Conexion Ready!'));

export default app;

