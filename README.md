# eslint-config-react
ESLinter and Prettier configuration for React Project.

## How to install
Run the following command to install the project's dependencies:
```
npm i -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```

## How to use
To configure ESLinter and Prettier 

#### On .eslintrc.json file set:

```
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "no-param-reassign": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "import/no-unresolved": [2, { "ignore": ["@env"] }],
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "no-console": "off",
    "arrow-parens": [2, "as-needed"],
    "react/jsx-props-no-spreading": "off",
    "prefer-destructuring": "off",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "useTabs": false
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["."]
      }
    }
  }
}
```

#### Create a .prettierrc.json with:
```
{
  "arrowParens": "avoid",
  "singleQuote": true,
  "trailingComma": "none",
  "endOfLine": "auto",
  "printWidth": 80,
  "tabWidth": 2
}
```

