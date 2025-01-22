import yaml from 'js-yaml';

const yamlFormatter = (diff) => {
  // Convierte el diff a YAML usando la librería js-yaml
  return yaml.dump(diff, { noRefs: true, lineWidth: -1 });
};

export default yamlFormatter;
