import renderAST from "./stylish.js";
import plainFormatter from "./plain.js";

const formatters = {
  stylish: renderAST,
  plain: plainFormatter,
  json: (diff) => JSON.stringify(diff, null, 2),
};

export default (diff, formatName = "stylish") => {
  if (!formatters[formatName]) {
    throw new Error(`Unknown format: ${formatName}`);
  }
  return formatters[formatName](diff);
};
