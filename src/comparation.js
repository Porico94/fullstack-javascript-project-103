import _ from "lodash";

const gendiff = (file1, file2) => {

  let commonKeys = [];
  let commonKeysArray = [];
  let uncommonKeys1 = [];
  let uncommonKeys2 = [];

  const objectKeysFile1 = Object.keys(file1); // Obtenemos las claves de file1
  const objectKeysFile2 = Object.keys(file2); // Obtenemos las claves de file2

  //Comparamos los keys y values de los dos objetos y lo guardamos en un array
  for (const key1 of objectKeysFile1) {
    for (const key2 of objectKeysFile2) {
      if (file1[key1] === file2[key2] && key1 === key2) {
        commonKeys.push(key1);
        commonKeysArray.push(`  ${key1}: ${file1[key1]}`);
      }
    }
  }

  //Guardamos los keys no comunes del primer objeto
  for (const objectKey1 of objectKeysFile1) {
    if (!commonKeys.includes(objectKey1)) {
      uncommonKeys1.push(`- ${objectKey1}: ${file1[objectKey1]}`);
    }
  }

  //Guardamos los keys no comunes del segundo objeto
  for (const objectKey2 of objectKeysFile2) {
    if (!commonKeys.includes(objectKey2)) {
      uncommonKeys2.push(`+ ${objectKey2}: ${file2[objectKey2]}`);
    }
  }

  //Unimos los arrays
  const arrayResult = [...commonKeysArray, ...uncommonKeys1, ...uncommonKeys2];

  //Ordenamos el array
  const arrayResultOrdered = _.sortBy(arrayResult, (item) => {
    const key = item.substring(2).split(':')[0];
    const prefixPriority = item.startsWith('-') ? 0 : 1;
    return [key, prefixPriority];
  });

  // Formateamos el resultado como un "objeto JSON" y lo devolvemos
   return `{\n${arrayResultOrdered.join("\n")}\n}`;
};

export default gendiff;
