import { ADD_VALUE, DELETED_VALUE, CHANGED_VALUE, UNCHANGED_VALUE, NESTED_VALUE } from '../constants.js';

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

  diff.forEach((node) => {
    // Construir la ruta completa para la propiedad
    const propertyPath = ancestry ? `${ancestry}.${node.key}` : node.key;

    // Según el tipo de cambio, agregamos la línea correspondiente
    switch (node.type) {
      case ADD_VALUE:
        lines.push(`Property '${propertyPath}' was added with value: ${formatValue(node.value)}`);
        break;
      case DELETED_VALUE:
        lines.push(`Property '${propertyPath}' was removed`);
        break;
      case CHANGED_VALUE:
        lines.push(`Property '${propertyPath}' was updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`);
        break;
      case NESTED_VALUE:
        // Si es un nodo anidado, procesamos recursivamente sus children y agregamos sus líneas
        lines.push(plainFormatter(node.children, propertyPath));
        break;
      case UNCHANGED_VALUE:
      default:
        // No mostramos propiedades sin cambios en formato plain.
        break;
    }
  });

  return lines.join('\n');
};

export default plainFormatter;