module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "google",
        "eslint:recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "rules": {
        "no-var": "error",
        "semi": "error",
        "indent": "error",
        "no-multi-spaces": "error",
        "space-in-parens": "error",
        "no-multiple-empty-lines": "error",
        "prefer-const": "error",
        "no-use-before-define": "error"
      }
};
