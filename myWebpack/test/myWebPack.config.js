const path = require('path')
const myPlugin = require('./plugin/myPlugin')

module.exports = {
  baseDir: path.resolve(__dirname),
  entry: path.resolve(__dirname, 'module1.js'),
  template: path.resolve(__dirname, 'index.html'),
  modules: {
    rules: [{
      test: /\.js/,
      use: [
        {
          loader: path.resolve(__dirname, './loader/replace.js'),
          options: {
            replaceString: 'xcy1',
            name: 'myWebpackLoaderReplace2'
          }
        }
      ],
    },{
      test: /\.js/,
      use: [
        {
          loader: path.resolve(__dirname, './loader/replace.js'),
          options: {
            replaceString: 'xcy2',
            name: 'myWebpackLoaderReplace2'
          }
        }
      ],
    }]
  },
  output: {
    fliename: 'myWebpack.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new myPlugin()
  ]
}