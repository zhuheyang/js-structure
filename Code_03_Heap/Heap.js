// require('./basis')
const SaltNode = require('./_KeyValueNode')
const SaltObject = require('./_ObjectMethod')

function Heap(optHeap) {
  this.nodes_ = []
  if(optHeap instanceof Heap) {
    this.insertAll(optHeap)
  }
}
Heap.prototype.insert = function(key, value) {
  let node = new SaltNode(key, value)
  let nodes = this.nodes_
  nodes.push(node)
  this.moveUp_(nodes.length - 1)
}
Heap.prototype.insertAll = function(heap) {
  let keys, values
  let nodes = this.nodes_
  if(heap instanceof Heap) {
    keys = this.getKeys.call(heap)
    values = this.getValues.call(heap)
    // keys = heap.getKeys()
    // values = heap.getValues()
    if(nodes.length <= 0) {
      for(let i = 0; i < keys.length; i++) {
        nodes.push(new SaltNode(keys[i], values[i]))
      }
    }
    return;
  } else {
    // if not instanceof Heap, then it's an object, use Obejcets' key-value method
    keys = SaltObject.getKeys(heap)
    values = SaltObject.getValues(heap)
  }
  for(let j = 0; j < keys.length; j++) {
    this.insert(keys[j], values[j])
  }
}
// remove the root value of the heap
Heap.prototype.remove = function() {
  var nodes = this.nodes_
  var count = nodes.length
  var rootNode = nodes[0]
  if(count <= 0) {
    return undefined
  } else if(count == 1) {
    // 不能使用nodes = [], 也即对nodes这个引用类型变量进行赋值
    // 这样子改变不了this.nodes_的指针指向的, 改变的只能是nodes的指针指向
    this.nodes_ = []  
  } else{
    // 将nodes数组最后的一个值提到开头来(使用pop操作), 进行heapify操作
    nodes[0] = nodes.pop()
    this.moveDown_(0)
  }
  return rootNode.getValue()
}

// 从index = 0,开始, 比较与其子节点的大小关系, 依次进行变换
Heap.prototype.moveDown_ = function(index) {
  let nodes = this.nodes_
  let count = nodes.length
  let node = nodes[index]  // save the node being moved down

  // let left = this.getLeftChildIndex_(index)
  // while(left < count)
  while(index < ((count - 1) >> 1)) {  // or, left = index * 2 + 1 < index, make sure the index has left child
    var leftChildIndex = this.getLeftChildIndex_(index)
    var rightChildIndex = this.getRightChildIndex_(index)
    var smallerChildIndex = rightChildIndex < count && nodes[rightChildIndex].getValue() < nodes[leftChildIndex].getValue()
      ? rightChildIndex
      : leftChildIndex
    if(nodes[smallerChildIndex].getValue() > node.getValue()) {
      break
    }
    nodes[index] = nodes[smallerChildIndex]
    index = smallerChildIndex
  }
  nodes[index] = node
}

Heap.prototype.moveUp_ = function(index) {
  // 每次push元素进this.nodes_数组都进行一次moveUp_操作
  // 比较插入元素与其父元素的关系, 从插入位置nodes.length - 1开始, 遍历至边界index>0
  var nodes = this.nodes_
  var node = nodes[index]
  while(index > 0) {
    var parentIndex = this.getParentIndex(index)
    if(nodes[parentIndex].getValue() > node.getValue()) {
      nodes[index] = nodes[parentIndex]
      index = parentIndex
    } else {
      break
    }
  }
  nodes[index] = node
}

Heap.prototype.peek = function() {
  var nodes = this.nodes_;
  if (nodes.length == 0) {
    return null
  }
  return nodes[0].getValue();
}

Heap.prototype.peekKey = function() {
  return this.nodes_[0] && this.nodes_[0].getKey();
}

Heap.prototype.getLeftChildIndex_ = function(index) {
  return index * 2 + 1
}

Heap.prototype.getRightChildIndex_ = function(index) {
  // Or return this.getLeftChildIndex_(index) + 1
  return index * 2 + 2
}

Heap.prototype.getParentIndex = function(index) {
  // 运用位运算进行(index - 1) / 2的计算, 就不用使用Math.floor()方法这么繁琐了
  return (index - 1) >> 1
}

// get Keys
Heap.prototype.getKeys = function() {
  let res = []
  let i = 0
  for(let Node of this.nodes_) {
    res[i++] = Node.getKey()
  }
  return res
}

// get Values
Heap.prototype.getValues = function() {
  let res = []
  let i = 0
  for(let Node of this.nodes_) {
    res[i++] = Node.getValue()
  }
  return res
}
// contains Value
// contains Key
// clone => optHeap
// getCount
// isEmpty
// clear
module.exports = Heap
