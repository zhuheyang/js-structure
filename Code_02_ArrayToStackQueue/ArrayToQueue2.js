// ArrayToQueue1�е�һ�����õĵط��Ǹտ�ʼʱ��ָ�����еĴ�С, ������������õķ�Χ�Ļ�����ThrowError
// goog.structs.Queue��ʵ��������JS����Ķ�̬����ʵ����������Զ�����
const NewArray = require('./_ArrayRemove')

function GoogQueue() {
  this.front_ = []  // used to poll(), namely dequeue()
  this.back_ = []  // used to push(), namely enqueue()
}
GoogQueue.prototype.maybeFlip_ = function() {
  // ����������������this.front_Ϊ��ʱ�Ž�this.back_�е����ݵ�ת����
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
  // ����this.front_��,����βΪ����ͷ, ����Ӧʹ��lastIndexOf()��ĩβ����������removeLast()��
  // ͬʱ||������, һ��ǰ��Ľ����ȷ��, ����ı��ʽ�����ټ���
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

