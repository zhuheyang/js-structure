// first��lastֱ����ֱ�ӹ�ϵ, ֻ����size���Ƴ���
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
  // ����Ԫѡ�����, ����ʹ��++������, ����this.last���ǻ᲻��, һֱΪ0
  this.last = this.last == this.arr.length - 1 ? 0 : this.last + 1
}
ArrayQueue.prototype.poll = function() {
  if(this.size == 0) {
    throw new Error('This queue is empty')
  }
  this.size--
  const temp = this.first
  // ͬ��, ����Ԫ��������, ��Ҫʹ��++������, ����this.first�᲻��, һֱΪ0
  this.first = this.fist == this.arr.length - 1 ? 0 : this.first + 1
  return this.arr[temp]
}


