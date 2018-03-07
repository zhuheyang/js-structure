// for test, each code you write should definately run at least once!
let SaltObject = require('./_ObjectMethod')
let obj = {name : 'mm', age: 12, dream: 'be rich'}
console.log(SaltObject.getKeys(obj));  
console.log(SaltObject.getValues(obj));
// [ 'name', 'age', 'dream' ]
// [ 'mm', 12, 'be rich' ]