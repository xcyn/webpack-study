const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  externals: ['lodash'], // 可以把lodash拆包拆离出去
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'xcy.js',
    library: 'xcy', // 代表可以通过index.html方式引入
    libraryTarget: 'commonjs', // 支持require方式引入 commonjs | umd | amd
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
        template: path.join(__dirname, './index.html'),
        filename: 'index.html'
    })
  ]
};