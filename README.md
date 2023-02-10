# eslint-config-react
ESLinter and Prettier configuration for React Project.

## How to install
Run the following command to install the project's dependencies:
```
npm i -D eslint && npx eslint --init && ( export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest") && npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

## How to use
To configure ESLinter and Prettier 

#### On .eslintrc file:

```diff
"extends": [
-   "eslint:recommended",
+   "airbnb",
+   "airbnb/hooks",
    "plugin:react/recommended",
+   "plugins:prettier/recommended"
  ]
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

