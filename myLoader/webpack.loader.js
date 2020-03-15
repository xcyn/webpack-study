const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
let config = {
  mode: 'production',
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist')
  },
  resolveLoader: {
    modules: ['node_modules', './loader']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        {
          // loader: path.resolve(__dirname, './loader/replace.js'),
          loader: 'replace', // 和配置resolveLoader连用
          options: {
            name: 'loader2'
          }
        }
      ],
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

module.exports = config