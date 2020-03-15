class myPlugin {
  constructor(){
    console.log("====初始化")
  }
  apply(compiler) {
    // compiler存放所有的打包内容
    // 常用生命周期如下
    compiler.hooks.beforeRun.tap('myPlugin', (compilation) => {
      // compilation 存放的只是和这次打包相关的内容
      console.log('compiler.run() 执行之前，添加一个钩子')
    })
    compiler.hooks.compile.tap('myPlugin', (compilation) => {
      console.log('在一个新的compilation创建之前执行')
    })
    compiler.hooks.compilation.tap('myPlugin', (compilation) => {
      console.log('在一次compilation创建后执行插件')
    })
    compiler.hooks.make.tapAsync('myPlugin', (compilation, cb) => {
      console.log('完成一次编译之前执行')
      cb()
    })
    compiler.hooks.emit.tapAsync('myPlugin', (compilation, cb) => {
      compilation.assets['testPlugin.txt'] = {
        source: function source() {
          return '111'
        },
        size: function size() {
          return 3
        }
      };
      cb()
    })
    compiler.hooks.afterEmit.tapAsync('myPlugin', (compilation, cb) => {
      console.log('在生成文件到output目录之后执行')
      cb()
    })
    compiler.hooks.assetEmitted.tapAsync('myPlugin', (file, info, cb) => {
      console.log('生成文件的时候执行，提供访问产出文件信息的入口，回调参数：file，info', file, info)
      cb()
    })
    compiler.hooks.done.tapAsync('myPlugin', (stats, cb) => {
      console.log('一次编译完成后执行，回调参数：stats')
      cb()
    })
    console.log('调用myPlugin')
  }
}
module.exports = myPlugin