import _ from "lodash";
import formatPlainObject from "./formatObjectStylish.js";

const stylish = (diff, depth = 1) => {
  // Calculamos la indentación para este nivel.
  // Por ejemplo, en la raíz (depth = 1) se usan (1*4 - 2) = 2 espacios.
  const indent = " ".repeat(depth * 4 - 2);

  const lines = diff.map(({ key, prefix, value, children, depth }) => {
    // Si el nodo tiene "children", significa que ambos valores eran objetos
    if (children) {
      // Llamamos recursivamente a stylish para formatear los hijos
      const formattedChildren = stylish(children, depth + 1);
      return `${indent}${prefix} ${key}: {\n${formattedChildren}\n${indent}  }`;
    }
    // Si el valor es un objeto y no se generó "children" (por ejemplo, uno es objeto y el otro no)
    if (_.isPlainObject(value)) {
      const formattedObject = formatPlainObject(value, depth + 1);
      return `${indent}${prefix} ${key}: ${formattedObject}`;
    }
    // Caso base: valor primitivo
    return `${indent}${prefix} ${key}: ${value}`;
  });

  // Solo en el nivel raíz se agregan las llaves envolventes
  return depth === 1 ? `{\n${lines.join("\n")}\n}` : lines.join("\n");
};

export default stylish;
