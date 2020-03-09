const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
        template: path.join(__dirname, './index.html'),
        filename: 'index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ts.js'
  },
};