module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-irregular-whitespace': 'off',
    'vue/return-in-computed-property':'off',
    'no-console': 'off',
    'no-useless-escape': 0,
    'vue/multi-word-component-names': 'off',
  },
};
