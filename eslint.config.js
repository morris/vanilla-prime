// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'build',
      'coverage',
      'dist',
      'node_modules',
      'public/js',
      'src/js/vendor',
    ],
  },
);
