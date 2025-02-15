import _ from "lodash";

const buildDiff = (file1, file2, depth = 1) => {
  const allkeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));

  return allkeys.flatMap((key) => {
    // Si la clave solo existe en file2
    if (!_.has(file1, key)) {
      return { key, prefix: "+", value: file2[key], depth };
    }

    // Si la clave solo existe en file1
    if (!_.has(file2, key)) {
      return { key, prefix: "-", value: file1[key], depth };
    }

    const value1 = file1[key];
    const value2 = file2[key];

    // Si ambos valores son objetos, llamamos a buildDiff recursivamente
    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key,
        prefix: " ",
        children: buildDiff(value1, value2, depth + 1),
        depth,
      };
    }

    // Si los valores son diferentes
    if (!_.isEqual(value1, value2)) {
      return [
        { key, prefix: "-", value: value1, depth },
        { key, prefix: "+", value: value2, depth },
      ];
    }

    // Si los valores son iguales
    return { key, prefix: " ", value: value1, depth };
  });
};

export default buildDiff;
