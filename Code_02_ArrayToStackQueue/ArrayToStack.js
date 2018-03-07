module.exports = ArrayStack
function ArrayStack(initSize) {
  this.arr = new Array(initSize)
  this.size = 0
}
ArrayStack.prototype.peek = function () {
  if (this.size == 0) {
    return null
  }
  return this.arr[this.size - 1]  // 此时的栈顶值在size - 1处
}
ArrayStack.prototype.push = function (obj) {
  if (this.size == this.arr.length) {
    throw new Error('This stack is full')
  }
  this.arr[this.size++] = obj  // 在arr[size]处放置obj值, 并将size++, 即便原本有值, 也会被重新覆盖
}
ArrayStack.prototype.pop = function () {
  if (this.size == 0) {
    throw new Error('This stack is empty')
  }
  return this.arr[--this.size]  // 直接返回--size的值即可, pop操作不必将原先的值去除
}
ArrayStack.prototype.toString = function () {
  let res = 'StackBottom -> '
  if (this.size == 0) {
    return '栈为空'
  } else {
    for (let i = 0; i < this.size; i++) {
      res += this.arr[i] + ' -> '
    }
  }
  return res += 'StackPeek'
}
ArrayStack.prototype.isEmpty = function (){
	return this.size == 0
}
