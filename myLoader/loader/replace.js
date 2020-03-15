const loaderUtils = require('loader-utils');
module.exports = function replace(source) {
  const options = loaderUtils.getOptions(this);
  const content = source.replace('xcy', options.name)
  this.callback(null, content)
  // 如果设计异步loader 可以通过 callback = this.async() 来实现。
}
// this.callback 参数说明：
// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: sourceMap,
//   meta?: any
// )