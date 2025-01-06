import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
    const ext = path.extname(filePath);    
    if (ext !== ".json") {
      throw new Error(`Invalid file type: ${ext}. Only JSON files are supported.`)
    }
    const absolutePath = path.resolve(filePath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(data);
}

export default readFile;