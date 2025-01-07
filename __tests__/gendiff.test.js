import readFile from "../src/fileReader";
import gendiff from "../src/comparation";
import { expectedOutput } from "../__fixtures__/expectedOutput";
import { expectedOutput2 } from "../__fixtures__/expectedOutput2";
import { expectedOutput3 } from "../__fixtures__/expectedOutput3";
import { expectedOutput4 } from "../__fixtures__/expectedOutput4";


//Caso base 1: Comparamos dos archivos json normales
// eslint-disable-next-line no-undef
test("gendiff compare two files json", () => {
  const file1Data = readFile("__fixtures__/file1.json");
  const file2Data = readFile("__fixtures__/file2.json");
  
  const diff = gendiff(file1Data, file2Data);  

  // eslint-disable-next-line no-undef
  expect(diff.trim()).toBe(expectedOutput);
});

//Caso base 2: Comparamos dos archivos yaml normales
// eslint-disable-next-line no-undef
test("gendiff compare two files yaml", () => {
  const file1Data = readFile("__fixtures__/file1.yaml");
  const file2Data = readFile("__fixtures__/file2.yaml");
  
  const diff = gendiff(file1Data, file2Data);  

  // eslint-disable-next-line no-undef
  expect(diff.trim()).toBe(expectedOutput);
});

//Caso base 3: Comparamos un archivo json y un archivo yaml
// eslint-disable-next-line no-undef
test("gendiff compare a json file and a yaml file", () => {
  const file1Data = readFile("__fixtures__/file1.json");
  const file2Data = readFile("__fixtures__/file2.yaml");
  
  const diff = gendiff(file1Data, file2Data);  

  // eslint-disable-next-line no-undef
  expect(diff.trim()).toBe(expectedOutput);
});

//Caso extremo 1: Archivos vacios
// eslint-disable-next-line no-undef
test("gendiff compare empty files", () => {
  const file1Data = readFile("__fixtures__/empty1.json");
  const file2Data = readFile("__fixtures__/empty2.json");
  
  const diff = gendiff(file1Data, file2Data);  

  // eslint-disable-next-line no-undef
  expect(diff.trim()).toBe(expectedOutput2);
});

//Caso extremo 2: Un archivo vacío
// eslint-disable-next-line no-undef
test("gendiff compare with one empty files", () => {
  const file1Data = readFile("__fixtures__/empty1.json");
  const file2Data = readFile("__fixtures__/file2.json");
  
  const diff = gendiff(file1Data, file2Data);  

  // eslint-disable-next-line no-undef
  expect(diff.trim()).toBe(expectedOutput3);
});

//Caso extremo 3: Archivos identicos
// eslint-disable-next-line no-undef
test("gendiff compare with same files", () => {
  const file1Data = readFile("__fixtures__/file1.json");
  const file2Data = readFile("__fixtures__/file3.json");
  
  const diff = gendiff(file1Data, file2Data);

  // eslint-disable-next-line no-undef
  expect(diff.trim()).toBe(expectedOutput4);
});

// Caso extremo: Archivo no JSON
// eslint-disable-next-line no-undef
test("throws an error for non-JSON files", () => {
  // Ruta de archivo inválido
  const invalidFilePath = "__fixtures__/invalid.txt";

  // Comprobar que se lanza un error
  // eslint-disable-next-line no-undef
  expect(() => {
    readFile(invalidFilePath); // Llamada que debería lanzar el error
  }).toThrow("Unsupported file type: .txt");
});