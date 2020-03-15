# pages打包
  + pages项目为demo项目 [多页打包](./PAGES/webpack.pages.js "多页打包")
  + 关键配置
  ```
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
    mode: 'production',
    entry: {
      page1: './src/page1.js',
      page2: './src/page2.js',
    },
    output: {
      path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'page1.html',
        chunks: ['vendors', 'page1']
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'page2.html',
        chunks: ['vendors', 'page2']
      })
    ]
  }
  ```