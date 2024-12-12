import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
    const absolutePath = path.resolve(filePath);
    const data = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(data);
}

export default readFile;