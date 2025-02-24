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

const plainFormatterLines = (diff, ancestry = '') => {
  const nodes = diff.children || diff;
  return nodes.flatMap((node) => {
    const propertyPath = ancestry ? `${ancestry}.${node.key}` : node.key;
    switch (node.type) {
      case ADD_VALUE:
        return [
          `Property '${propertyPath}' was added with value: ${formatValue(node.value)}`,
        ];
      case DELETED_VALUE:
        return [
          `Property '${propertyPath}' was removed`,
        ];
      case CHANGED_VALUE:
        return [
          `Property '${propertyPath}' was updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`,
        ];
      case NESTED_VALUE:
        return plainFormatterLines(node.children, propertyPath);
      case UNCHANGED_VALUE:
      default:
        return [];
    }
  });
};

const plainFormatter = (diff, ancestry = '') => {
  const lines = plainFormatterLines(diff, ancestry);
  return lines.join('\n');
};

export default plainFormatter;
