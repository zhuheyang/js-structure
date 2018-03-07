const Heap = require('./Heap')

// 这里建立的是小根堆, 所以对应的排序是
// 23 -> 23 43 -> 23 43 32 -> 1 23 32 43 
// pop() -> 43 23 32 -> 23 43 32 -> pop(23) -> 32 43

// moveDown_, moveUp_  // 私有方法, 用于调整Heap结构
// insert, remove, peek, peekKeys
function test1() {
  let heap1 = new Heap()
  heap1.insert('person2', 23)
  console.log(heap1.peek(), heap1.peekKey());  // 23 'person2'
  heap1.insert('person3', 43)
  console.log(heap1.peek(), heap1.peekKey());  // 23 'person2'
  heap1.insert('person1', 32)
  heap1.insert('person4', 1)
  console.log(heap1.peek(), heap1.peekKey(), heap1.remove());  // 1 'person4' 1
  console.log(heap1.peek(), heap1.peekKey(), heap1.remove());  // 23 'person2' 23
  return heap1
}
// test1()

// insertAll
function test2() {
  let heap1 = test1()
  console.log(heap1.getKeys(), heap1.getValues());  //[ 'person1', 'person3' ] [ 32, 43 ]
  let heap2 = new Heap(heap1)
  console.log(heap2.peek());  // 32
}
test2()

// getKeys, getValues
if('you want to try') {
  let heap1 = test1()
  let res = []
  let ii = []
  for(let i in heap1.nodes_) {
    res[i] = heap1.nodes_[i].getKey()
    ii[i] = i
  }
  console.log(res);  // [ 'person1', 'person3' ]
  console.log(ii);  // [ '0', '1' ]  // for-in循环中, 循环获取的是属性名, 因此为字符串
}