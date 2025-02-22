/* eslint-disable no-undef */
import fileReader from "../src/parsers.js"; // Lee y parsea archivos (JSON/YAML)
import buildDiff from "../src/diff.js"; // Genera el árbol de diferencias
import formatDiff from "../src/formatters/index.js"; // Selecciona el formateador según la opción
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Definimos __filename y __dirname para construir rutas relativas al directorio de tests
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para leer archivos de texto (resultado esperado)
const txtReader = (filename) => {
  const absolutePath = path.join(__dirname, "..", "__fixtures__", filename);
  const data = fs.readFileSync(absolutePath, "utf-8");
  return data;
};

test("gendiff compare two files json format stylish", () => {
  const file1Object = fileReader("file1.json");
  const file2Object = fileReader("file2.json");

  const diff = buildDiff(file1Object, file2Object);
  const formatted = formatDiff(diff, 'stylish').trim();

  // Se lee el resultado esperado (archivo result-stylish.txt) desde __fixtures__
  const expected = txtReader("result-stylish.txt").trim();

  // Se normalizan saltos de línea para evitar diferencias invisibles
  expect(formatted.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare two files yaml format stylish", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.yml");

  const diff = buildDiff(file1Object, file2Object);
  const formatted = formatDiff(diff, 'stylish').trim();

  const expected = txtReader("result-stylish.txt").trim();
  expect(formatted.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare one file json and another file yaml format stylish", () => {
  const file1Object = fileReader("file1.json");
  const file2Object = fileReader("file2.yml");

  const diff = buildDiff(file1Object, file2Object);
  const formatted = formatDiff(diff, 'stylish').trim();

  const expected = txtReader("result-stylish.txt").trim();
  expect(formatted.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare two files json format plain", () => {
  const file1Object = fileReader("file1.json");
  const file2Object = fileReader("file2.json");

  const diff = buildDiff(file1Object, file2Object);
  const formatted = formatDiff(diff, 'plain').trim();

  const expected = txtReader("result-plain.txt").trim();
  expect(formatted.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare two files yaml format plain", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.yml");

  const diff = buildDiff(file1Object, file2Object);
  const formatted = formatDiff(diff, 'plain').trim();

  const expected = txtReader("result-plain.txt").trim();
  expect(formatted.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare one file json and another file yaml format plain", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.json");

  const diff = buildDiff(file1Object, file2Object);
  const formatted = formatDiff(diff, 'plain').trim();

  const expected = txtReader("result-plain.txt").trim();
  expect(formatted.replace(/\r\n/g, "\n")).toBe(expected.replace(/\r\n/g, "\n"));
});

test("gendiff compare one file json and another file yaml format json", () => {
  const file1Object = fileReader("file1.yml");
  const file2Object = fileReader("file2.json");

  const diff = buildDiff(file1Object, file2Object);
  const formattedOutput = formatDiff(diff, 'json').trim();

  // Construimos la ruta al archivo esperado 'json-result.json' ubicado en __fixtures__
  const absolutePath = path.join(__dirname, "..", "__fixtures__", "json-result.json");
  const expectedOutput = fs.readFileSync(absolutePath, "utf-8").trim();

  // Parseamos ambas salidas a objetos y comparamos
  expect(JSON.parse(formattedOutput)).toEqual(JSON.parse(expectedOutput));
});
