/* eslint-disable no-undef */
import fileReader from "../src/fileReader.js";
import buildDiff from "../src/buildDiff.js";
import formatDiff from "../src/formats/indexFormat.js";
import txtReader from "../src/txtReader.js";

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