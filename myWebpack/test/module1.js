const a = '222'
const { moudle2Print } = require('./module2.js')
const { moudle3Print } = require('./module3.js')

function moudle1Print() {
  moudle2Print('我是模块1中的moudle2Print')
  moudle3Print('我是模块1中的moudle3Print')
  document.write('测试自己手写一个webpack实现')
  document.write('测试自写的loader: xcy1<br/>')
  document.write('测试自写的loader: xcy2<br/>')
}

moudle1Print()