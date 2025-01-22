const stylish = (diff) => {

  const iter = (nodes = diff, depth = 1) => {
    const indent = "  ".repeat(depth);
    const lines = nodes.map((node) => {
      if (Array.isArray(node)) {
        return iter(node, depth); // Llamada recursiva para arrays
      }

      const { key, prefix, value, children } = node;

      if (children) {
        const nested = iter(children, depth + 1); // Llamada recursiva para `children`
        return `${indent}${prefix} ${key}: {\n${nested}\n${indent}}`;
      }

      return `${indent}${prefix} ${key}: ${value}`;
    });

    return lines.join("\n");
  };

  return `{\n${iter()}\n}`; // Agregamos los corchetes para el resultado de iter
};

export default stylish;