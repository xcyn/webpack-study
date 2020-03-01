# webpack学习整理
### 什么是webpack？
  + 定义: webpack是一个模块打包工具。
  + 打个比方，对esMoudle的处理.
  + 假设在index.js中存在如下代码，如果把上面代码放在浏览器中，浏览器是不能解析的
  ```
    import A from './A';
    import B from './B';
    import C from './C';
  ```
  + 而webpack能够识别esMoudle，所以通过webapck对代码做构建
  ```
    npx webpack index.js
  ```
  + 可以把如下代码打包成浏览器能够解析的代码。
### 什么是模块打包工具？
  + webpack支持的模块：esMoudle、common.js、CMD、AMD
  ```
    esMoudle: import -> export default
    common.js: require -> moudle.export
    AMD: 使用require.js.
      // 定义模块 myModule.js
      define(id?, dependencies?, factory);
      id：可选参数，用来定义模块的标识，如果没有提供该参数，脚本文件名（去掉拓展名）
      dependencies：是一个当前模块依赖的模块名称数组
      factory：工厂方法，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。
      例子：
      define('myModule', ['dependency'], function(){
          return {};
      });
      // 加载模块
      require([dependencies], function(){});
      例子：
      require(['myModule'], function (my){});
    CMD: 使用SeaJS
      // 定义模块  myModule.js
      define(function(require, exports, module) {
        module.exports = {
      });
      // 加载模块
      seajs.use(['myModule.js'], function(my){});
  ```
    + AMD和CDM区别
      通俗来说：
      AMD在加载完成定义（define）好的模块就会立即执行，所有执行完成后，遇到require才会执行主逻辑。（提前加载）
      CMD在加载完成定义（define）好的模块，仅仅是下载不执行，在遇到require才会执行对应的模块。（按需加载）
      AMD用户体验好，因为没有延迟，CMD性能好，因为只有用户需要的时候才执行。
  + webpack 最开始为js模块打包工具，后来随着发展webpack已经支持css、png/jpg....
### webpack的正确安装方式
  + [node安装](http://nodejs.cn/download "node安装")
  ```
    npm init 以node规范的形式创建一个包文件，webpack管理需要符合node规范
    npm install webpack webpack-cli -g 全局安装, 如果网络被墙，通过手机分享wifi热点, webpack-cli的作用就是让webpack命令可以在命令行中运行
    不推荐全局安装，如果项目webpack3的项目和webpack4的项目，那么全局安装就会有冲突。
    删除全局安装：npm uninstall webpack webpack-cli -g
    npm install webpack webpack-cli --save-dev(-D)
    npx webpack -v 此命令可以在当前项目的nodemoudles下找webpack
    npm info webpack 查看所有webpack版本
    npm webpack@4.2.1 安装webpack指定的4.2.1的版本
  ```
### webpack的配置文件
  + 创建webpack.config.js, 配置一个最基本的配置.
  ```
    const path = require('path');
    moudle.export = {
      mode: 'development(production)' development不压缩、production压缩、默认是production
      entry: {
        main: '入口文件'
      },
      output: {
        filename: '打包的文件名称',
        path: 输出路径-> path.resolve(__dirname, 'dist')
      }
    }
  ```
