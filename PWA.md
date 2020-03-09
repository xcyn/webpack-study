# 第三方库打包
  + PWA项目为demo项目 [PWA打包](./PWA/webpack.pwa.js "PWA打包")
  + 关键配置
  ```
  const path = require('path');
  const workboxPlugin = require('workbox-webpack-plugin');
  module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new workboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        swDest: 'service-wroker.js' // 输出 Service worker 文件
      })
    ]
  }
  ```