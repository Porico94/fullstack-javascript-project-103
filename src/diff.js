import _ from 'lodash';
import {
  UNCHANGED_VALUE, ADD_VALUE, CHANGED_VALUE, DELETED_VALUE, NESTED_VALUE, ROOT_VALUE,
} from './constants.js';

function getDiff(dataFile1, dataFile2) {
  const keys = _.sortBy(_.union(Object.keys(dataFile1), Object.keys(dataFile2)));

  return keys.map((key) => {
    const valueInFile1 = dataFile1[key];
    const valueInFile2 = dataFile2[key];

    if (!(key in dataFile1)) {
      return { key, type: ADD_VALUE, value: valueInFile2 };
    }
    if (!(key in dataFile2)) {
      return { key, type: DELETED_VALUE, value: valueInFile1 };
    }
    if (_.isPlainObject(valueInFile1) && _.isPlainObject(valueInFile2)) {
      return {
        key,
        type: NESTED_VALUE,
        children: getDiff(valueInFile1, valueInFile2),
      };
    }
    if (!_.isEqual(valueInFile1, valueInFile2)) {
      return {
        key,
        type: CHANGED_VALUE,
        value1: valueInFile1,
        value2: valueInFile2,
      };
    }

    return { key, type: UNCHANGED_VALUE, value: valueInFile2 };
  });
}

export default (data1, data2) => ({
  type: ROOT_VALUE,
  children: getDiff(data1, data2),
});
