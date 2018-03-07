# 优先队列也即堆结构的实现

这里面涉及的方法有很多, 其中this.nodes_为用数组实现的大根堆, moveUp_, moveDown_是插入或删除后的数组结构调整  
理应写好某个方法之后就应该进行对应的测量的, 等到写好之后, 才发现有这么多的方法需要逐一运行测试, 工作量实在是有点大!

## 根据传入的参数是否为Heap的实例, 直接新建一个新Heap的this指向问题

结果是for(let sth of obeject)循环写错了, 

```js
// 如果写成for-of循环, 返回的数组的索引是有序的, 就对了
// 但很明显注释中的为错的, 尽管不要记住错误的错误, 但为了加深印象, 还是写了下来, 因为为此也调试了一会
// for(let i of this.nodes) {
//   res[i] = this.nodes[i].getKey()
// }

// 正确的写法应为:
let res = []
let i = 0
for(let Node of this.nodes) {
  res[i++] = Node.getKey()
}
```

## 堆结构调整

重新进行堆排序时, 要么从0位置开始, 向后逐个与其左右子节点进行比较替换, 抑或是从arr.length - 1位置开始, 向前与其父节点进行比较  
则有两种方法进行调整, 一种是保存当前位置的值, 并不断将替换后的值转移到当前位置, 最后再将保存的值赋给最后的位置, 再者是每次都使用swap函数进行替换. 两种方法都要使用额外的一个变量进行存储, 但存取次数不同  

### 插入新值的调整

```js
// 这里仅对从后往前进行堆遍历的操作进行比较
function method1(index) {
  let nodes = this.nodes_
  let node = nodes[index]
  while(index > 0) {
    let parent = this.getParentIndex(index)
    // 如果比较的是key的话, 使用getKey, 在这里比较的应为value, 所以采用getValue方法
    if(nodes[parent].getValue() < nodes[index].getValue()) 
      nodes[index] = nodes[parent]
      index = parent
    } else{
      break
    }
  }
  nodes[index] = node  // 将最开始保存的node[index]值传给当前的index位置
}
```

```js
// 这是使用swap操作的情况
function method2(index) {
  let nodes = this.nodes_
  while(index > 0) {
    let parent = this.getParentIndex(index)
    if(nodes[parent].getValue() < nodes[index].getValue()) 
      swap(nodes, parent, index)
      index = parent
    } else{
      return
    }
  }
}
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
```

### 弹出新值后的调整

```js
function remove() {
  let nodes = this.nodes_
  nodes[0] = nodes.pop()
  this.moveDown_(0)  // namely heapify
}

// 弹出堆顶值后的堆排序过程, 在heapSize范围内, 依次与其左右子节点进行比较交换, 重新达成堆结构
// 与插入值之后的调整一样, 弹出新值后对小根堆的调整方式同样有两种, 一种是使用swap操作, 另一种就是保留弹出的node节点, 之后不断与其左右子节点进行比较, 最后将保留的node节点赋予给最后的index
// node = nodes[0]
// while(index < (count - 1) >> 1) 
// { nodes[index] = nodes[smallerChildIndex]; index = smallerChildIndex}   // or do not swap, break, then index still index
// nodes[index] = node
function heapify(index) {
    let nodes = this.nodes_  // 堆结构的数组形式
    let left = this.getLeftChildIndex_(index)  // 获取左节点
    while(left < nodes.length) {
      let largest = left + 1 < nodes.length && nodes[left] < nodes[left + 1] ? left + 1 : left
      largest = nodes[largest] > nodes[index] ? largest : index
      if(largest == index) {
        return
      }
  
      // swap(nodes, index, largest)
      const temp = nodes[index]
      nodes[index] = node[largest]
      node[largest] = temp
      
      index = largest
      left = this.getLeftChildIndex_(index)
    }
}
```
