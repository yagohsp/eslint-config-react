const prettierConfig = require('@yago.gif/prettier-config')

module.exports ={
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    'prettier/prettier': [
      "error", prettierConfig
    ],
    'space-before-function-paren': "off",
    'react/prop-types': "off",
    'react/jsx-filename-extension': [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    'import/prefer-default-export': "off",
    'import/no-cycle': "off",
    'comma-dangle': "off",
    'object-curly-newline': "off",
    'no-console': "off",
    'arrow-parens': [2, "as-needed"],
    'react/jsx-props-no-spreading': "off",
    'react/no-array-index-key': "off",
    'prefer-destructuring': "off"
  }
}
