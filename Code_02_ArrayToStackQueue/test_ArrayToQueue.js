const ArrayQueue = require('./ArrayToQueue')

function test() {
  var queue = new ArrayQueue(10)
  console.log(queue.peek());  // null
  queue.push('memeda')
  queue.push('ss')
  console.log(queue.last, queue.first);  // 2 0
  console.log(queue.arr);  // [ 'memeda', 'ss', <8 empty items> ]
  queue.push('third')
  console.log(queue.poll());  // memeda
  console.log(queue.last, queue.first);  // 3 1
}

test()