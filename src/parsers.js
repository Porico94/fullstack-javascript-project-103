import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

export default function parseFile(data, extension) {
  const parser = parsers[extension];

  if (!parser) {
    throw new Error(`Unsupported file extension '${extension}'.`);
  }

  try {
    return parser(data);
  } catch (error) {
    throw new Error(
      `Failed to parse data with extension '${extension}': ${error.message}`
    );
  }
}
