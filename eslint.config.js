import globals from 'globals';
import airbnbBase from 'eslint-config-airbnb-base';

// Extraemos las propiedades no permitidas (extends y parserOptions) del objeto heredado
const { extends: _extends, parserOptions, ...restAirbnbConfig } = airbnbBase;

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // Definimos nuestras opciones de lenguaje y combinamos el parserOptions heredado aquí
    languageOptions: {
      ecmaVersion: 2022, // o "latest"
      sourceType: 'module',
      globals: globals.browser,
      // Si fuera necesario, especifica parserOptions aquí:
      parserOptions: { sourceType: 'module', ecmaVersion: 2022 },
    },
    // Incorporamos el resto de la configuración heredada sin las propiedades que no son válidas
    ...restAirbnbConfig,
    rules: {
      ...restAirbnbConfig.rules,
      // Puedes agregar o modificar reglas adicionales aquí
    },
  },
];