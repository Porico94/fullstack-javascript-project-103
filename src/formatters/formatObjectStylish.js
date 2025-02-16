import _ from "lodash";

const formatPlainObject = (obj, depth) => {
  const indent = " ".repeat(depth * 4);
  const closingIndent = " ".repeat(depth * 4 - 4);
  const lines = Object.entries(obj).map(([key, value]) => {
    if (_.isPlainObject(value)) {
      // Si el valor es un objeto, lo procesamos recursivamente
      return `${indent}${key}: ${formatPlainObject(value, depth + 1)}`;
    }
    return `${indent}${key}: ${value}`;
  });
  return `{\n${lines.join("\n")}\n${closingIndent}}`;
};

export default formatPlainObject;
