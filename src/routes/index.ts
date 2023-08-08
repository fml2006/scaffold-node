import { Router } from 'express';
import { readdirSync } from 'fs';  // readdirSync lee el contenido de un directorio

const PATH_ROUTER = `${__dirname}/`; // __dirname es una variable global que contiene la ruta del directorio actual
const router = Router();

const cleanFileName = (fileName: string) => { // Funcion para limpiar el nombre del archivo
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {  // readdirSync lee el contenido de un directorio
    const cleanName = cleanFileName(fileName);
    if ( cleanName !== 'index' ) {
        import(`./${cleanName}`).then((moduleRouter) => { // import dinamico de los archivos de rutas, nos devuelve una promesa con el modulo 
            router.use(`/${cleanName}`, moduleRouter.router); 
        });
    }
})

export { router };