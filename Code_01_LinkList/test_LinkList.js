// test
const LinkedList = require('./LinkList')
function test1 () {
  var ll = new LinkedList()
  ll.addFirst('memeda')
  ll.append('you')
  ll.insertBefore('I', 'memeda')
  console.log(ll.findPrevious('you'));
  console.log(ll.toString());
  return ll;
}
function test2() {
  var ll2 = new LinkedList()
  ll2.append('keke')
  ll2.insertAfter('memeda', 'keke')
  console.log(ll2.toString());
  return ll2;
}
function test3() {
  var ll3 = test2()
  ll3.insertBefore('I', 'memeda')
  ll3.reverse()
  console.log(ll3.toString());
}

if('you want to test') {
  console.log('------------------');
  test1()
  console.log('------------------');
  test2()
  console.log('------------------');
  test3()
  console.log('------------------');
}