import stylish from "./stylish.js";
import plainFormatter from "./plain.js";
import jsonFormatter from "./json.js";

const formatDiff = (data, formatName) => {
  switch (formatName) {
    case "stylish":
      return stylish(data);

    case "plain":
      return plainFormatter(data);

    case "json":
      return jsonFormatter(data);

    default:
      throw new Error(`Formato desconocido: ${formatName}`);
  }
};

export default formatDiff;
