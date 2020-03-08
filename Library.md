# 第三方库打包
  + Library项目为demo项目
  + 关键配置
  ```
  const path = require('path');
  module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      externals: ['lodash'],
      fileName: 'library.js',
      library: 'library', // 代表可以通过index.html方式引入
      libraryTarget: 'umd', // 支持require方式引入
    }
  }
  ```
  + vue-cli3方式
  ```
  package.json
  "build": "vue-cli-service build --target lib --name adSdk ./src/sdk/index.js",
  ```
  + 帐号申请和发包
  1、npm adduser xxx
  2、npm login --registry http://registry.npmjs.org
  3、npm publish --registry http://registry.npmjs.org