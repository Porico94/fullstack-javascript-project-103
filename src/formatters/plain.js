import {
  ADD_VALUE,
  DELETED_VALUE,
  CHANGED_VALUE,
  UNCHANGED_VALUE,
  NESTED_VALUE,
} from '../constants.js';

const formatValue = (val) => {
  if (typeof val === 'object' && val !== null) {
    return '[complex value]';
  }
  if (typeof val === 'string') {
    return `'${val}'`;
  }
  return String(val);
};

const plainFormatter = (diff, ancestry = '') => {
  let lines = [];

  // Si diff es el objeto raíz con la propiedad children, itera sobre ella.
  const nodes = diff.children || diff;

  nodes.forEach((node) => {
    // Construir la ruta completa para la propiedad
    const propertyPath = ancestry ? `${ancestry}.${node.key}` : node.key;

    // Según el tipo de cambio, agregamos la línea correspondiente
    switch (node.type) {
      case ADD_VALUE:
        lines.push(
          `Property '${propertyPath}' was added with value: ${formatValue(
            node.value
          )}`
        );
        break;
      case DELETED_VALUE:
        lines.push(`Property '${propertyPath}' was removed`);
        break;
      case CHANGED_VALUE:
        lines.push(
          `Property '${propertyPath}' was updated. From ${formatValue(
            node.value1
          )} to ${formatValue(node.value2)}`
        );
        break;
      case NESTED_VALUE:
        // Procesa recursivamente los nodos anidados.
        lines.push(plainFormatter(node.children, propertyPath));
        break;
      case UNCHANGED_VALUE:
      default:
        // No se muestra nada para nodos sin cambios.
        break;
    }
  });

  return lines.join('\n');
};

export default plainFormatter;
