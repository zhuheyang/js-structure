// for test
let Node = require('./_KeyValueNode')
let node = new Node('dream', 'be rich')
console.log(node.getKey(), node.getValue());  // dream be rich
let cloneNode = node.clone()
console.log(cloneNode.getKey(), cloneNode.getValue());  // dream be rich