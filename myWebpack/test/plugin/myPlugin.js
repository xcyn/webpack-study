class myPlugin {
  constructor(){
  }
  apply(compiler) {
    compiler.hooks.emit.tap('myPlugin', (compilation) => {
      console.log('emit', compilation)
    })
    compiler.hooks.initPlugin.tap('myPlugin', () => {
      console.log('初始化插件完毕hooks')
    })
  }
}
module.exports = myPlugin