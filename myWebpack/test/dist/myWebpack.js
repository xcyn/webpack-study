
      (function(moduleFileStr) {
        const moduleFilesStr = {"./module1.js":{"entry":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module1.js","dependences":{"./module2.js":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module2.js","./module3.js":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module3.js"},"code":"\"use strict\";\n\nvar a = '222';\n\nvar _require = require('./module2.js'),\n    moudle2Print = _require.moudle2Print;\n\nvar _require2 = require('./module3.js'),\n    moudle3Print = _require2.moudle3Print;\n\nfunction moudle1Print() {\n  moudle2Print('我是模块1中的moudle2Print');\n  moudle3Print('我是模块1中的moudle3Print');\n  document.write('测试自己手写一个webpack实现');\n  document.write('测试自写的loader: myWebpackLoaderReplace2<br/>');\n  document.write('测试自写的loader: myWebpackLoaderReplace2<br/>');\n}\n\nmoudle1Print();"},"./module2.js":{"entry":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module2.js","dependences":{"./module3.js":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module3.js"},"code":"\"use strict\";\n\nvar _require = require('./module3.js'),\n    moudle3Print = _require.moudle3Print;\n\nvar moudle2Print = function moudle2Print() {\n  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  if (print) {\n    console.log(print);\n    moudle2Print();\n    return;\n  }\n\n  console.log('我是模块2中的moudle2Print');\n  moudle3Print('我是模块2中的moudle3Print');\n  document.write('我是模块2: 测试自写的loader: myWebpackLoaderReplace2<br/>');\n};\n\nmodule.exports = {\n  moudle2Print: moudle2Print\n};"},"./module3.js":{"entry":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module3.js","dependences":{},"code":"\"use strict\";\n\nvar moudle3Print = function moudle3Print() {\n  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  if (print) {\n    console.log(print);\n    moudle3Print();\n    return;\n  }\n\n  console.log('我是模块3中的moudle3Print');\n};\n\nmodule.exports = {\n  moudle3Print: moudle3Print\n};"}}
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
      })({"entry":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module1.js","dependences":{"./module2.js":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module2.js","./module3.js":"/Users/apple/Documents/xiangmu/webpack-study/myWebpack/test/module3.js"},"code":"\"use strict\";\n\nvar a = '222';\n\nvar _require = require('./module2.js'),\n    moudle2Print = _require.moudle2Print;\n\nvar _require2 = require('./module3.js'),\n    moudle3Print = _require2.moudle3Print;\n\nfunction moudle1Print() {\n  moudle2Print('我是模块1中的moudle2Print');\n  moudle3Print('我是模块1中的moudle3Print');\n  document.write('测试自己手写一个webpack实现');\n  document.write('测试自写的loader: myWebpackLoaderReplace2<br/>');\n  document.write('测试自写的loader: myWebpackLoaderReplace2<br/>');\n}\n\nmoudle1Print();"})
    