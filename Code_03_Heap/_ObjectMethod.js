// getKeys method
function getKeys(object) {
  let res = []
  let i = 0
  for(let key in object) {
    res[i++] = key
  }
  return res // return an array
}
// getValues method
function getValues(object) {
  let res = []
  let i = 0
  for(let key in object) {
    res[i++] = object[key]
  }
  return res  // return an array
}
module.exports = {
  getKeys: getKeys,
  getValues: getValues
}
// exports.getKeys = getKeys
// exports.getValues = getValues
