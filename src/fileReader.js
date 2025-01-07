import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readFile = (filePath) => {
    const ext = path.extname(filePath); //Extraemos la extesion del archivo en la ruta
    const absolutePath = path.resolve(filePath); //Crea la ruta absoluta uniendo el directorio donde estamos mas la ruta que le damos
    const data = fs.readFileSync(absolutePath, 'utf-8');// Transforma el formato JSON o YMl en un texto plano que es necesario para
                                                        // luego convertirlo en un objeto de javascript.
    if (ext === '.json') {
        return JSON.parse(data); // Si es extension .json se usa JSON.parse para transformar el texto plano en un objeto JS
    }

    if (ext === '.yaml' || ext === '.yml') {
        return yaml.load(data); // Si es extension .yaml se usa yaml.load para transformar el texto plano en un objeto JS
    }

    throw new Error(`Unsupported file type: ${ext}`); // Si no es JSON ni YML envia un mensaje de error
};

export default readFile;