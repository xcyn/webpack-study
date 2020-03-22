const path = require('path');

module.exports = {
  baseDir: path.resolve(__dirname),
  entry: path.resolve(__dirname, 'module1.js'),
  template: path.resolve(__dirname, 'index.html'),
  output: {
    fliename: 'myWebpack.js',
    path: path.resolve(__dirname, 'dist')
  }
}