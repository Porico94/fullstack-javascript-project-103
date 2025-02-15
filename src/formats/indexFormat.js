import stylish from "./stylish.js";
import plainFormatter from "./plain.js";

const formatDiff = (data, formatName) => {
  switch (formatName) {
    case "stylish":
      return stylish(data);

    case "plain":
      return plainFormatter(data);

    default:
      throw new Error(`Formato desconocido: ${formatName}`);
  }
};

export default formatDiff;
