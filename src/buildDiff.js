
import _ from "lodash";

const buildDiff = (file1, file2) => {
  const allKeys = _.union(Object.keys(file1), Object.keys(file2)).sort(); // Todas las claves, ordenadas alfabéticamente
  
  return allKeys.map((key) => {
    if (!_.has(file1, key)) {
      // Clave solo en file2
      return { key, prefix: "+", value: file2[key] };
    }

    if (!_.has(file2, key)) {
      // Clave solo en file1
      return { key, prefix: "-", value: file1[key] };
    }

    const value1 = file1[key];
    const value2 = file2[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      // Si ambos valores son objetos, comparar recursivamente
      return {
        key,
        prefix: " ",
        children: buildDiff(value1, value2),
      };
    }

    if (value1 !== value2) {
      // Valores diferentes
      return [
        {key, prefix: "-", value: value1},
        {key, prefix: "+", value: value2}
      ];
    }

    // Valores iguales
    return { key, prefix: " ", value: value1 };
  });
};

export default buildDiff;