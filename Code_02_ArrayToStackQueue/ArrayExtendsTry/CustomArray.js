class NewArray extends Array {
  constructor() {
    super()
  }
  _removeAt(arr, i) {
    if(arr.length == null) {
      throw new Error('array\'s length should be number')
    } else if(arr.length <= 0) {
      throw new Error('array\'s length is less than 0')
    }
    return Array.prototype.splice.call(arr, i, 1).length == 1
  }
  remove(arr, obj) {
    const i = arr.indexOf(obj)
    let rv
    if((rv = i >= 0)) {
      this._removeAt(arr, i) 
    }
    return rv
  }
  removeLast(arr, obj) {
    const i = arr.lastIndexOf(obj)
    if(i >= 0) {
      this._removeAt(arr, i)
      return true
    }
    return false
  }
}
module.exports = NewArray
// you should always make this statement lay in the end of the files, so that it will not raise ReferenceError like:
// c:\Users\lin\Desktop\JS_Structure\Code_02_ArrayToStackQueue\ArrayExtendsTry\CustomArray.js:1
// (function (exports, require, module, __filename, __dirname) { module.exports = NewArray
//                                                                                ^

// ReferenceError: NewArray is not defined
