module.exports = LinkedList
// 链表与节点的构建
function LinkedList () {
  this.head = null
  // use tail for efficiency
  this.tail = null
}
function ListNode (element) {
  this.data = element
  this.next = null
}
// head头部是没有data项的, 所以一开始应赋予null 
// 则初始赋值时, 应先让初始节点的next指向此时的null, 之后再让this.head指向初始节点
// 同时由于tail指针的存在, 如果此时的head指针为null的话, 那么tail应指向目前存在的唯一节点
// 也即新建的h节点了.
LinkedList.prototype.addFirst = function (element) {
  var h = new ListNode(element)
  h.next = this.head
  // 初始情况下, this.head与this.tail都未有指向, 需初始化this.tail
  // 在头部进行插入的话, 就不需像insertAfterNode那样重置this.tail了
  if(this.head == null) {
    this.tail = h
  }
  this.head = h 
}
LinkedList.prototype.append = function (element) {
  if(this.head == null) {
    this.addFirst(element)
  } else{
    this.insertAfterNode(element, this.tail)
  }
}
LinkedList.prototype.findNode = function (element) {
  // this.head也只是一个指针而已, this.head指向的也是一个ListNode类型, 它同样具有data以及next属性
  var pointer = this.head
  while(pointer != null && pointer.data != element) {
    pointer = pointer.next
  }
  return pointer;
}
LinkedList.prototype.insertAfterNode = function (element, node) {
  // represent this.findNode(data) did not return 
  if(node == null) {
    return
  }
  var n = new ListNode(element)
  n.next = node.next
  node.next = n
  // 如果传入的node函数参数为this.tail, 则还需重定向this.tail的指向, 若在节点后插入的, 则不用
  if(node == this.tail) {
    this.tail = n 
  }
}
LinkedList.prototype.insertAfter = function (element, data) {
  this.insertAfterNode(element, this.findNode(data))
}
// 节点前插入, 首先要找到节点前的节点, 分为头节点为null时的特殊情况与一般情况
LinkedList.prototype.findPrevious = function(data) {
  var prev = null
  var cur = this.head
  while(cur != null && cur.data != data) {
    prev = cur
    cur = cur.next
  }
  return [prev, cur]
}
LinkedList.prototype.insertBefore = function (element, data) {
  // 如果此时链表为空, 则自然找不到对应的node节点, 直接return即可
  if(this.head == null) return
  // 排除掉cur为this.head的情况
  if(this.head.data ===data) {
    this.addFirst(element)
    return;
  }
  var p = this.findPrevious(data)
  if(p[1] != null) {
    var n = new ListNode(element)
    n.next = p[0].next
    p[0].next = n
  }
}
// 删除节点的操作, 找到删除节点的前一个节点, 将其next指针指向删除节点的next即可
LinkedList.prototype.delete = function(data) {
  // 同样需要找到之前的一个节点, 所以需要排除头节点的情况
  if(this.head.data == data) {
    this.head = this.head.next
    return
  }
  var p = this.findPrevious(data)
  if(p[0] != null && p[1] != null) {
    p[0].next = p[1].next
  }
}
// reverse整个链表, 需要单独对头指针与尾指针进行调换的操作
LinkedList.prototype.reverse = function() {
  var p = this.head
  if(p == null) {return null}
  // 提前将尾指针的位置设置好
  this.tail = this.head
  var temp = null
  var q = p.next
  while(q != null) {
    temp = q.next
    q.next = p
    p = q
    q = temp
  }
  // 改变头指针的指向, 此时头指针在尾部, 应将其next变为null, 同时使其指向当前的头部
  // 也即最后的p变量所在处
  this.head.next = null
  this.head = p
  return this // 也即此时的反转链表
}
LinkedList.prototype.toString = function() {
  var p = this.head
  var str = ''
  while(p != null) {
    str += JSON.stringify(p.data) + (p.next == null ? '' : '->')
    p = p.next
  }
  return str
}
