const { moudle3Print } = require('./module3.js')
const moudle2Print = function (print='') {
  if(print) {
    console.log(print)
    moudle2Print()
    return
  }
  console.log('我是模块2中的moudle2Print')
  moudle3Print('我是模块2中的moudle3Print')
  document.write('我是模块2: 测试自写的loader: xcy2<br/>')
}
module.exports = {
  moudle2Print
}