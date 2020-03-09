# TS打包
  + TS项目为demo项目 [TS打包](./TS/webpack.ts.js "TS打包")
  + 关键配置
  ```
  npm install ts-loader typescript --save-dev
  配置tsconfig.json
  const path = require('path');
  module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
      ]
    }
  }
  ```