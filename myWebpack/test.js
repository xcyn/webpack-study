      '"use strict";\n' +
      '\n' +
      "var a = '222';\n" +
      '\n' +
      "var _require = require('./module2'),\n" +
      '    moudle2Print = _require.moudle2Print;\n' +
      '\n' +
      "var _require2 = require('./module3'),\n" +
      '    moudle3Print = _require2.moudle3Print;\n' +
      '\n' +
      'function moudle1Print() {\n' +
      "  moudle2Print('我是模块1中的moudle2Print');\n" +
      "  moudle3Print('我是模块1中的moudle3Print');\n" +
      '}\n' +
      '\n' +
      'moudle1Print();'

      '"use strict";\n' +
      '\n' +
      "var _require = require('./module3.js'),\n" +
      '    moudle3Print = _require.moudle3Print;\n' +
      '\n' +
      'var moudle2Print = function moudle2Print() {\n' +
      "  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n" +
      '\n' +
      '  if (print) {\n' +
      '    console.log(print);\n' +
      '    moudle2Print();\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      "  console.log('我是模块2中的moudle2Print');\n" +
      "  moudle3Print('我是模块2中的moudle3Print');\n" +
      '};\n' +
      '\n' +
      'module.exports = {\n' +
      '  moudle2Print: moudle2Print\n' +
      '};'
      
      '"use strict";\n' +
      '\n' +
      'var moudle3Print = function moudle3Print() {\n' +
      "  var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n" +
      '\n' +
      '  if (print) {\n' +
      '    console.log(print);\n' +
      '    moudle3Print();\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      "  console.log('我是模块3中的moudle3Print');\n" +
      '};\n' +
      '\n' +
      'module.exports = {\n' +
      '  moudle3Print: moudle3Print\n' +
      '};'