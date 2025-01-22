import stylish from '../src/stylish.js';
import yamlFormater from '../src/yamlFormatter.js'

// Formateador de diferencias
const formatDiff = (diff, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(diff);
    case 'yaml':
      return yamlFormater(diff);
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};

export default formatDiff;