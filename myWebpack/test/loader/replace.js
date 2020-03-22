module.exports = function replace(source, options) {
  const { replaceString, name } = options
  const content = source.replace(replaceString, name)
  return content
}