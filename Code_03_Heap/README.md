# ���ȶ���Ҳ���ѽṹ��ʵ��

�������漰�ķ����кܶ�, ����this.nodes_Ϊ������ʵ�ֵĴ����, moveUp_, moveDown_�ǲ����ɾ���������ṹ����  
��Ӧд��ĳ������֮���Ӧ�ý��ж�Ӧ�Ĳ�����, �ȵ�д��֮��, �ŷ�������ô��ķ�����Ҫ��һ���в���, ������ʵ�����е��!

## ���ݴ���Ĳ����Ƿ�ΪHeap��ʵ��, ֱ���½�һ����Heap��thisָ������

�����for(let sth of obeject)ѭ��д����, 

```js
// ���д��for-ofѭ��, ���ص�����������������, �Ͷ���
// ��������ע���е�Ϊ���, ���ܲ�Ҫ��ס����Ĵ���, ��Ϊ�˼���ӡ��, ����д������, ��ΪΪ��Ҳ������һ��
// for(let i of this.nodes) {
//   res[i] = this.nodes[i].getKey()
// }

// ��ȷ��д��ӦΪ:
let res = []
let i = 0
for(let Node of this.nodes) {
  res[i++] = Node.getKey()
}
```

## �ѽṹ����

���½��ж�����ʱ, Ҫô��0λ�ÿ�ʼ, ���������������ӽڵ���бȽ��滻, �ֻ��Ǵ�arr.length - 1λ�ÿ�ʼ, ��ǰ���丸�ڵ���бȽ�  
�������ַ������е���, һ���Ǳ��浱ǰλ�õ�ֵ, �����Ͻ��滻���ֵת�Ƶ���ǰλ��, ����ٽ������ֵ��������λ��, ������ÿ�ζ�ʹ��swap���������滻. ���ַ�����Ҫʹ�ö����һ���������д洢, ����ȡ������ͬ  

### ������ֵ�ĵ���

```js
// ������ԴӺ���ǰ���жѱ����Ĳ������бȽ�
function method1(index) {
  let nodes = this.nodes_
  let node = nodes[index]
  while(index > 0) {
    let parent = this.getParentIndex(index)
    // ����Ƚϵ���key�Ļ�, ʹ��getKey, ������Ƚϵ�ӦΪvalue, ���Բ���getValue����
    if(nodes[parent].getValue() < nodes[index].getValue()) 
      nodes[index] = nodes[parent]
      index = parent
    } else{
      break
    }
  }
  nodes[index] = node  // ���ʼ�����node[index]ֵ������ǰ��indexλ��
}
```

```js
// ����ʹ��swap���������
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

### ������ֵ��ĵ���

```js
function remove() {
  let nodes = this.nodes_
  nodes[0] = nodes.pop()
  this.moveDown_(0)  // namely heapify
}

// �����Ѷ�ֵ��Ķ��������, ��heapSize��Χ��, �������������ӽڵ���бȽϽ���, ���´�ɶѽṹ
// �����ֵ֮��ĵ���һ��, ������ֵ���С���ѵĵ�����ʽͬ��������, һ����ʹ��swap����, ��һ�־��Ǳ���������node�ڵ�, ֮�󲻶����������ӽڵ���бȽ�, ��󽫱�����node�ڵ㸳�������index
// node = nodes[0]
// while(index < (count - 1) >> 1) 
// { nodes[index] = nodes[smallerChildIndex]; index = smallerChildIndex}   // or do not swap, break, then index still index
// nodes[index] = node
function heapify(index) {
    let nodes = this.nodes_  // �ѽṹ��������ʽ
    let left = this.getLeftChildIndex_(index)  // ��ȡ��ڵ�
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
