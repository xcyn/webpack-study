const moudle3Print = function (print = '') {
  if(print) {
    console.log(print)
    moudle3Print()
    return
  }
  console.log('我是模块3中的moudle3Print')
}
module.exports = {
  moudle3Print
}