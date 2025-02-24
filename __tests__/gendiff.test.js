import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';

// Definimos __filename y __dirname para construir rutas relativas al directorio de tests
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para leer archivos de texto (resultado esperado)
const txtReader = (filename) => {
  const absolutePath = path.join(__dirname, '..', '__fixtures__', filename);
  return fs.readFileSync(absolutePath, 'utf-8');
};
 
test('gendiff compare two files json format stylish', () => {
  // Construir rutas absolutas a los archivos de entrada
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');

  // Se ejecuta genDiff con el formato 'stylish'
  const formatted = genDiff(file1Path, file2Path, 'stylish').trim();

  // Se lee el resultado esperado desde __fixtures__/result-stylish.txt
  const expected = txtReader('stylish-result.txt').trim();

  // Se comparan ambos resultados normalizando saltos de línea
   
  expect(formatted.replace(/\r\n/g, '\n')).toBe(expected.replace(/\r\n/g, '\n'));
});

 
test('gendiff compare one file json and another file yml with format stylish', () => {
  // Construir rutas absolutas a los archivos de entrada
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.yml');

  // Se ejecuta genDiff con el formato 'stylish'
  const formatted = genDiff(file1Path, file2Path, 'stylish').trim();

  // Se lee el resultado esperado desde __fixtures__/result-stylish.txt
  const expected = txtReader('stylish-result.txt').trim();

  // Se comparan ambos resultados normalizando saltos de línea
   
  expect(formatted.replace(/\r\n/g, '\n')).toBe(expected.replace(/\r\n/g, '\n'));
});

 
test('gendiff compare two files json with format plain', () => {
  // Construir rutas absolutas a los archivos de entrada
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');

  // Se ejecuta genDiff con el formato 'stylish'
  const formatted = genDiff(file1Path, file2Path, 'plain').trim();

  // Se lee el resultado esperado desde __fixtures__/result-stylish.txt
  const expected = txtReader('plain-result.txt').trim();

  // Se comparan ambos resultados normalizando saltos de línea
   
  expect(formatted.replace(/\r\n/g, '\n')).toBe(expected.replace(/\r\n/g, '\n'));
});

 
test('gendiff compare one file json and another file yml with format plain', () => {
  // Construir rutas absolutas a los archivos de entrada
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'file1.yml');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'file2.json');

  // Se ejecuta genDiff con el formato 'stylish'
  const formatted = genDiff(file1Path, file2Path, 'plain').trim();

  // Se lee el resultado esperado desde __fixtures__/result-stylish.txt
  const expected = txtReader('plain-result.txt').trim();

  // Se comparan ambos resultados normalizando saltos de línea
   
  expect(formatted.replace(/\r\n/g, '\n')).toBe(expected.replace(/\r\n/g, '\n'));
});