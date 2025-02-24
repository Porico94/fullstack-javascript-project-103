/* eslint-disable */
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];
