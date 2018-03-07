// first与last直接无直接关系, 只利用size控制出入
function ArrayQueue(initSize) {
  if (typeof initSize != 'number') {
    throw new Error('initSize mush be number')
  } else if (initSize < 0) {
    throw new Error('This initSize is less than 0')
  }
  this.arr = new Array(initSize)
  this.size = 0;
  this.first = 0
  this.last = 0
}
ArrayQueue.prototype.peek = function () {
  if (this.size == 0) {
    return null
  }
  return this.arr[this.first]
}
ArrayQueue.prototype.push = function(obj) {
  if(this.size == this.arr.length) {
    throw new Error('The queue is full')
  }
  this.size++
  this.arr[this.last] = obj
  // 在三元选择符中, 不能使用++操作符, 否则this.last总是会不变, 一直为0
  this.last = this.last == this.arr.length - 1 ? 0 : this.last + 1
}
ArrayQueue.prototype.poll = function() {
  if(this.size == 0) {
    throw new Error('This queue is empty')
  }
  this.size--
  const temp = this.first
  // 同上, 在三元操作符中, 不要使用++操作符, 否则this.first会不变, 一直为0
  this.first = this.fist == this.arr.length - 1 ? 0 : this.first + 1
  return this.arr[temp]
}


