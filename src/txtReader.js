import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const txtReader = (filename) => {
  const absolutePath = path.join(__dirname, "..", "__fixtures__", filename);
  const data = fs.readFileSync(absolutePath, "utf-8"); // Transforma el formato JSON o YMl en un texto plano que es necesario para
  // luego convertirlo en un objeto de javascript.
  return data;
};

export default txtReader;
