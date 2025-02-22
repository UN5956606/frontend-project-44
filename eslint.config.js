import globals from 'globals';


export default [
  {
    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
        // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

    },
  },
  {
    rules: {
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'],
        },
      ],
    },
  },
];