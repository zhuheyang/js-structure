const ArrayStack = require('./ArrayToStack')
function test1() {
  let stack = new ArrayStack(5)
  stack.push(3)
  console.log(stack.toString());  // StackBottom -> 3 -> StackPeek
  stack.push({
    memda: '111',
    love: 'zhen'
  })
  console.log(stack.toString());  // StackBottom -> 3 -> [object Object] -> StackPeek
  console.log(stack.pop())  // { memda: '111', love: 'zhen' }
  console.log(stack.peek())  //  3
}
test1();
function test2() {
  let stack = new ArrayStack(5)
  console.log(stack.isEmpty());
}
test2()