const { SyncHook } = require('tapable');
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')
const { entry, output, baseDir, template, modules = {}, plugins = [] }  = require('./test/myWebPack.config.js')
const complier = {
  compilation: {
    name: 'compilation',
    complier: this
  },
  modules,
  plugins,
  // 映射表
  moduleFileMap: {},
  hooks: {
    initPlugin: new SyncHook(),
    emit: new SyncHook(["compilation"])
  },
  // 用于入口读取
  run:  function () {
    this.initPlugin()
    this.hooks.initPlugin.call()
    let moduleFile = this.build(entry)
    const entryRpath = `.${entry.slice(baseDir.length)}`
    this.moduleFileMap[entryRpath] = moduleFile
    this.resolveDependences(moduleFile)
    this.file(entryRpath, this.moduleFileMap)
    this.hooks.emit.call(this.compilation)
  },
  // 用于js代码解析
  build: function( entry ) {
    const fullPath = path.resolve(baseDir, entry)
    const content = this.getSource(fullPath)
    // 生成ast
    const ast = parser.parse(content, {
      sourceType: 'module'
    })
    // 收集依赖
    let dependences = {}
    traverse(ast, {
      enter(nodePath) {
        const node = nodePath.node
        if(node && node.init) {
          const isCallExpression = node.init.type === 'CallExpression'
          const isRequire = node.init.callee && node.init.callee.name === 'require'
          if(isCallExpression && isRequire) {
            const dependence = node.init.arguments && node.init.arguments[0].value
            const dependencePath = path.resolve(baseDir, dependence)
            dependences[dependence] = dependencePath
          }
        }
      }
    })
    // 生成code
    const { code } = babel.transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })
    return {
      entry: fullPath,
      dependences,
      code
    }
  },
  // 递归解析依赖文件
  resolveDependences: function (moduleFile = {}) {
    const dependences = moduleFile.dependences
    if(dependences) {
      for( let dependence in dependences ) {
        const entry = `${dependence}`
        let content = this.build(entry)
        this.moduleFileMap[entry] = content
      }
    }
  },
  // 用于生成浏览器能识别的文件格式
  file: function(entry, moduleFiles) {
    const moduleFile = moduleFiles[entry]
    const moduleFileStr = JSON.stringify(moduleFile)
    let code = `
      (function(moduleFileStr) {
        const moduleFilesStr = ${JSON.stringify(moduleFiles)}
        function require(moduleMap) {
          if(!moduleMap) {
            return
          }
          var code = moduleMap.code;
          var module = {
            exports: {}
          };
          function loopRequire(moudle) {
            return require(moduleFilesStr[moudle])
          };
          (
            function(require, code){
              eval(code)
            }
          )(loopRequire, code);
          return module.exports
        }
        require(moduleFileStr);
      })(${moduleFileStr})
    `
    shell.rm('-rf', output.path)
    shell.mkdir('-p', output.path)
    const outputPath = path.resolve(output.path, output.fliename)
    fs.writeFileSync(outputPath, code, 'utf8')
    // 对index.html模版注入代码
    let templateHtml = fs.readFileSync(template, 'utf8')
    const generateHtml = templateHtml.replace('<!-- inject -->', `<script src="${outputPath}"></script>`)
    fs.writeFileSync(path.resolve(output.path, 'index.html'), generateHtml, 'utf8')
    return code
  },
  // 获取文件内容
  getSource: function (moudle) {
    let content = fs.readFileSync(moudle, 'utf8')
    content = this.resolveLoaders(moudle, content)
    return content
  },
  // loader功能补全
  resolveLoaders: function (moudle, content) {
    const rules = modules.rules || []
    for (let index = 0; index < rules.length; index++) {
      const loader = rules[index]
      let test = loader.test
      if(test.test(moudle)) {
        let use = loader.use || []
        for (let key = 0; key < use.length; key++) {
          const loaderIns = use[key];
          const options = loaderIns.options
          const loaderFn = require(loaderIns.loader)
          content = loaderFn.call(this, content, options)
        }
      }
    }
    return content
  },
  // plugin执行
  initPlugin: function () {
    for (let index = 0; index < plugins.length; index++) {
      const plugin = plugins[index]
      plugin.apply(this)
    }
  }
}
complier.run()