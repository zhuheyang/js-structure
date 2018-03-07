// use CustomArray.js's NewArray class to do sth
const CustomArray = require('./CustomArray')

class MyArray extends Array {
  // there lays nothing, and you can use the MyArray like the built-in array, like, new MyArray('Array's lenght')
  doSth() {
    console.log('this method is in prototype')
  }
}

function customArrayTest() {
  let arr = new CustomArray()
  console.log(arr)  // NewArray []
  arr[0] = 'memeda'
  arr[1] = 'you'
  console.log(arr);  // NewArray [ 'memeda', 'you' ]
}

function test2() {
  let arr2 = new MyArray(11, 24343, 223)
  console.log(arr2, 'you can use Array\'s arguments\' method directly')   //  MyArray [ 11, 24343, 223 ] 'you can use Array\'s arguments\' method directly'
  let arr3 = new MyArray(3)
  arr2.doSth()  // clg: this method is in prototype
  console.log(arr3);  // MyArray [ <3 empty items> ]
}

if('you want to test') {
  customArrayTest()
  test2()
}