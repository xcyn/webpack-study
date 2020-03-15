const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
let config = {
  mode: 'production',
  entry: {
    page1: './page1/index.js',
    page2: './page2/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
function generatePages(config = {}) {
  let entrys = config.entry || {}
  Object.keys(entrys).map((thunks) => {
    let htmlPlugin =  new htmlWebpackPlugin({
      template: './index.html',
      filename: `${thunks}.html`,
      chunks: [thunks]
    })
    config.plugins.push(htmlPlugin)
  } )
  return config
}

module.exports = generatePages(config)