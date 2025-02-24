import fs from "fs";
import path from "path";
import getDiff from "./diff.js";
import parseFile from "./parsers.js";
import format from "./formatters/index.js";

 
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export const readFile = (fullFilePath) => {
  try {
    const extension = path.extname(fullFilePath).split('.')[1];
    const data = parseFile(fs.readFileSync(fullFilePath, 'utf-8'), extension);
    return data;    
  } catch (err) {
    console.error(`Error reading file '${fullFilePath}':`, err.message);
    return null;
  }
};

export default function genDiff(path1, path2, formatType = 'stylish') {
  const firstFilePath = getFullPath(path1);
  const secondFilePath = getFullPath(path2);

  const firstFileData = readFile(firstFilePath);
  const secondFileData = readFile(secondFilePath);

  if (!firstFileData || !secondFileData) {
    console.error(
      "Error reading one or both files. Please check the file paths and formats."
    );
    return;
  }

  const diff = getDiff(firstFileData, secondFileData);
  const formattedDiff = format(diff, formatType);
  return formattedDiff;
}
