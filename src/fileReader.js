import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileReader = (filename) => {
  const ext = path.extname(filename);
  const absolutePath = path.join(__dirname, "..", "__fixtures__", filename);
  const data = fs.readFileSync(absolutePath, "utf-8"); // Transforma el formato JSON o YMl en un texto plano que es necesario para
  // luego convertirlo en un objeto de javascript.
  if (ext === ".json") {
    return JSON.parse(data); // Si es extension .json se usa JSON.parse para transformar el texto plano en un objeto JS
  }

  if (ext === ".yaml" || ext === ".yml") {
    return yaml.load(data);
  }
};

export default fileReader;
