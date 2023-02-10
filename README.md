# eslint-config-react
ESLinter and Prettier configuration for React Project.

## How to install
Run the following command to install the project's dependencies:
```
npm i -D eslint && npx eslint --init && ( export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest") && npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

## How to use
To configure ESLinter and Prettier 

#### On .eslintrc file set:

```
"extends": [
   "airbnb",
   "airbnb/hooks",
   "plugin:react/recommended",
   "plugins:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": ["error"],
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
    "comma-dangle": 0,
    "object-curly-newline": 0,
    "no-console": 0,
    "arrow-parens": [2, "as-needed"],
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "prefer-destructuring": 0
  }
```

#### Create a .prettierrc.json with:
```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true
}
```

