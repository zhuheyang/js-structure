const GoogQueue = require('./ArrayToQueue2')

function test() {
  let q = new GoogQueue()
  q.enqueue(111)
  q.enqueue('ememe')
  console.log(q.getValues())  // [ 111, 'ememe' ]
  q.remove(111)
  console.log(q.getValues())  // [ 'ememe' ]
  q.enqueue(222)
  q.enqueue(333)
  console.log(q.isEmpty()) // false
  console.log(q.contains(222))  // true
  console.log(q.peek())   // 333
  q.clear()
  console.log(q.peek());  // undefined, 同下, 也不会输出null
  console.log((q.front_[0]));  // undefined, 而不会输出null
  console.log(q.front_);  // []
  console.log(q.back_);  // []
}
test()