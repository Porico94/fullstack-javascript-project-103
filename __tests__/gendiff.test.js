/* eslint-disable no-undef */
import fileReader from "../src/parsers.js";
import buildDiff from "../src/diff.js";
import formatDiff from "../src/formatters/index.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const txtReader = (filename) => {
  const absolutePath = path.join(__dirname, "..", "__fixtures__", filename);
  const data = fs.readFileSync(absolutePath, "utf-8"); // Transforma el formato JSON o YMl en un texto plano que es necesario para
  // luego convertirlo en un objeto de javascript.
  return data;
};


test("gendiff compare two files json forrmat stylish", () => {
  const file1Object = fileReader("file1.json");
  const file2Object = fileReader("file2.json");

  const data = buildDiff(file1Object, file2Object);
  const formated = formatDiff(data, 'stylish').trim();

  // Leer el archivo TXT sin usar JSON.parse()
  const expected = txtReader("result-stylish.txt").trim();

  expect(formated.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare two files yaml", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.yml");

  const data = buildDiff(file1Object, file2Object);
  const formated = formatDiff(data, 'stylish').trim();

  // Leer el archivo TXT sin usar JSON.parse()
  const expected = txtReader("result-stylish.txt").trim();

  expect(formated.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare one file json and another file yaml", () => {
  const file1Object = fileReader("file1.json");
  const file2Object = fileReader("file2.yml");

  const data = buildDiff(file1Object, file2Object);
  const formated = formatDiff(data, 'stylish').trim();

  // Leer el archivo TXT sin usar JSON.parse()
  const expected = txtReader("result-stylish.txt").trim();

  expect(formated.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare two files json format plain", () => {
  const file1Object = fileReader("file1.json");
  const file2Object = fileReader("file2.json");

  const data = buildDiff(file1Object, file2Object);
  const formated = formatDiff(data, 'plain').trim();

  // Leer el archivo TXT sin usar JSON.parse()
  const expected = txtReader("result-plain.txt").trim();

  expect(formated.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare two files yaml format plain", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.yml");

  const data = buildDiff(file1Object, file2Object);
  const formated = formatDiff(data, 'plain').trim();

  // Leer el archivo TXT sin usar JSON.parse()
  const expected = txtReader("result-plain.txt").trim();

  expect(formated.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare one file json and another file yaml format plain", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.json");

  const data = buildDiff(file1Object, file2Object);
  const formated = formatDiff(data, 'plain').trim();

  // Leer el archivo TXT sin usar JSON.parse()
  const expected = txtReader("result-plain.txt").trim();

  expect(formated.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare one file json and another file yaml format json", () => {
  
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.json");

  const data = buildDiff(file1Object, file2Object);
  const formattedOutput = formatDiff(data, 'json').trim();

  // Leemos el resultado esperado desde el archivo json-result.json, ubicado en __fixtures__
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath = path.join(__dirname, "..", "__fixtures__", 'json-result.json');
  const expectedOutput = fs.readFileSync(absolutePath, "utf-8");
  
  // Parseamos ambas salidas a objetos y comparamos (para evitar diferencias en espacios, saltos de línea, etc.)
  expect(JSON.parse(formattedOutput)).toEqual(JSON.parse(expectedOutput));
});