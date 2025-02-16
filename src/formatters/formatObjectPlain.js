import _ from "lodash";

const formatPlain = (val) => {
  if (_.isPlainObject(val) || Array.isArray(val)) {
    return "[complex value]";
  }
  if (typeof val === "string") {
    return `'${val}'`;
  }
  return String(val);
};

export default formatPlain;
