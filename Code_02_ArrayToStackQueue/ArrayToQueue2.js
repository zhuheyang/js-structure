// ArrayToQueue1中的一个不好的地方是刚开始时需指定队列的大小, 如果超出所设置的范围的话还会ThrowError
// goog.structs.Queue中实现利用了JS数组的动态特性实现了数组的自动扩充
const NewArray = require('./_ArrayRemove')

function GoogQueue() {
  this.front_ = []  // used to poll(), namely dequeue()
  this.back_ = []  // used to push(), namely enqueue()
}
GoogQueue.prototype.maybeFlip_ = function() {
  // 仅当出队序列数组this.front_为空时才将this.back_中的数据调转过来
  if(this.front_.length == 0) {
    this.front_ = this.back_
    this.front_ = this.front_.reverse()
    this.back_ = []
  }
}
GoogQueue.prototype.enqueue = function(element) {
  this.back_.push(element)
}
GoogQueue.prototype.dequeue = function() {
  this.maybeFlip_()
  this.front_.pop()
}
GoogQueue.prototype.peek = function() {
  this.maybeFlip_()
  return this.front_[0]
}
GoogQueue.prototype.isEmpty = function() {
  return this.front_.length == 0 && this.back_.length == 0
}
GoogQueue.prototype.contains = function(obj) {
  return this.front_.indexOf(obj) >= 0 || this.back_.indexOf(obj) >= 0
}
GoogQueue.prototype.remove = function(obj) {
  // 由于this.front_中,数组尾为队列头, 所以应使用lastIndexOf()从末尾进行搜索并removeLast()掉
  // 同时||操作符, 一旦前面的结果正确后, 后面的表达式不会再计算
  return NewArray.removeLast.call(this, this.front_, obj) || NewArray.remove.call(this, this.back_, obj)
}
GoogQueue.prototype.clear = function() {
  this.front_ = []
  this.back_ = []
}
GoogQueue.prototype.getValues = function() {
  let res = []
  for(let i = this.front_.lenth - 1; i > 0; i--) {
    res.push(this.front_[i])
  }
  for(let j = 0; j < this.back_.length; j++) {
    res.push(this.back_[j])
  }
  return res
}

