module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': [0],
    'no-console': 'off',
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'template-curly-spacing': ['error', 'never'],
    'react/prop-types': [0],
    'max-len': [0],
    'import/no-extraneous-dependencies': [0],

  },
};
