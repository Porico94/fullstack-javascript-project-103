import stylish from "./stylish.js";
import plainFormatter from "./plain.js";

const formatters = {
  stylish,
  plain: plainFormatter,
};

export default (diff, formatName = "stylish") => {
  if (!formatters[formatName]) {
    throw new Error(`Unknown format: ${formatName}`);
  }
  return formatters[formatName](diff);
};
