// extends Array's remove method, mock from google-closure-library
// mean time, get familiar with NodeJS's export object, once you just want to extends some attr
const _removeAt = function (arr, i) {
  if(arr.length == null) {
    throw new Error('array\'s length should be number')
  } else if(arr.length <= 0) {
    throw new Error('array\'s length is less than 0')
  }
  return Array.prototype.splice.call(arr, i, 1).length == 1
}
// you can alse use module.exports like below, because exports object is exactly module.exports' reference
// module.exports.remove = .....
// moudle.exprots.removeLast = ....

// if you already make function remove and function removeLast
// you can reassign it more convenient: 
// module.exports.remove = remove
// module.exports.removeLast = removeLast
exports.remove = function (arr, obj) {
  const i = arr.indexOf(obj)
  let rv
  if((rv = i >= 0)) {
    _removeAt(arr, i) 
  }
  return rv 
}
exports.removeLast = function (arr, obj) {
  const i = arr.lastIndexOf(obj)
  if(i >= 0) {
    this._removeAt(arr, i)
    return true
  }
  return false
}
 
