import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['node_modules/', 'dist/', 'build/'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: [js.configs.recommended, prettierConfig],
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
