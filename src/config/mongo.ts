import 'dotenv/config'  // Variables de entorno
import { connect } from 'mongoose'; // Conectar a la base de datos

async function dbConnect(): Promise<void> { // Mongoose trabaja con MODELOS
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

export default dbConnect;