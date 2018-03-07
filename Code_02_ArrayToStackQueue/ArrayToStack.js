module.exports = ArrayStack
function ArrayStack(initSize) {
  this.arr = new Array(initSize)
  this.size = 0
}
ArrayStack.prototype.peek = function () {
  if (this.size == 0) {
    return null
  }
  return this.arr[this.size - 1]  // ��ʱ��ջ��ֵ��size - 1��
}
ArrayStack.prototype.push = function (obj) {
  if (this.size == this.arr.length) {
    throw new Error('This stack is full')
  }
  this.arr[this.size++] = obj  // ��arr[size]������objֵ, ����size++, ����ԭ����ֵ, Ҳ�ᱻ���¸���
}
ArrayStack.prototype.pop = function () {
  if (this.size == 0) {
    throw new Error('This stack is empty')
  }
  return this.arr[--this.size]  // ֱ�ӷ���--size��ֵ����, pop�������ؽ�ԭ�ȵ�ֵȥ��
}
ArrayStack.prototype.toString = function () {
  let res = 'StackBottom -> '
  if (this.size == 0) {
    return 'ջΪ��'
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
