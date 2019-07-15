// module.exports = {
//     "env": {
//         "browser": true,
//         "es6": true
//     },
//     "extends": "eslint:recommended",
//     "globals": {
//         "Atomics": "readonly",
//         "SharedArrayBuffer": "readonly"
//     },
//     "parserOptions": {
//         "ecmaVersion": 2018,
//         "sourceType": "module"
//     },
//     "rules": {
//     }
// };

module.exports = {
  extends: ["plugin:jest/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error"
  }
};
