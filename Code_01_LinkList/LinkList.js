module.exports = LinkedList
// ������ڵ�Ĺ���
function LinkedList () {
  this.head = null
  // use tail for efficiency
  this.tail = null
}
function ListNode (element) {
  this.data = element
  this.next = null
}
// headͷ����û��data���, ����һ��ʼӦ����null 
// ���ʼ��ֵʱ, Ӧ���ó�ʼ�ڵ��nextָ���ʱ��null, ֮������this.headָ���ʼ�ڵ�
// ͬʱ����tailָ��Ĵ���, �����ʱ��headָ��Ϊnull�Ļ�, ��ôtailӦָ��Ŀǰ���ڵ�Ψһ�ڵ�
// Ҳ���½���h�ڵ���.
LinkedList.prototype.addFirst = function (element) {
  var h = new ListNode(element)
  h.next = this.head
  // ��ʼ�����, this.head��this.tail��δ��ָ��, ���ʼ��this.tail
  // ��ͷ�����в���Ļ�, �Ͳ�����insertAfterNode��������this.tail��
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
  // this.headҲֻ��һ��ָ�����, this.headָ���Ҳ��һ��ListNode����, ��ͬ������data�Լ�next����
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
  // ��������node��������Ϊthis.tail, �����ض���this.tail��ָ��, ���ڽڵ������, ����
  if(node == this.tail) {
    this.tail = n 
  }
}
LinkedList.prototype.insertAfter = function (element, data) {
  this.insertAfterNode(element, this.findNode(data))
}
// �ڵ�ǰ����, ����Ҫ�ҵ��ڵ�ǰ�Ľڵ�, ��Ϊͷ�ڵ�Ϊnullʱ�����������һ�����
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
  // �����ʱ����Ϊ��, ����Ȼ�Ҳ�����Ӧ��node�ڵ�, ֱ��return����
  if(this.head == null) return
  // �ų���curΪthis.head�����
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
// ɾ���ڵ�Ĳ���, �ҵ�ɾ���ڵ��ǰһ���ڵ�, ����nextָ��ָ��ɾ���ڵ��next����
LinkedList.prototype.delete = function(data) {
  // ͬ����Ҫ�ҵ�֮ǰ��һ���ڵ�, ������Ҫ�ų�ͷ�ڵ�����
  if(this.head.data == data) {
    this.head = this.head.next
    return
  }
  var p = this.findPrevious(data)
  if(p[0] != null && p[1] != null) {
    p[0].next = p[1].next
  }
}
// reverse��������, ��Ҫ������ͷָ����βָ����е����Ĳ���
LinkedList.prototype.reverse = function() {
  var p = this.head
  if(p == null) {return null}
  // ��ǰ��βָ���λ�����ú�
  this.tail = this.head
  var temp = null
  var q = p.next
  while(q != null) {
    temp = q.next
    q.next = p
    p = q
    q = temp
  }
  // �ı�ͷָ���ָ��, ��ʱͷָ����β��, Ӧ����next��Ϊnull, ͬʱʹ��ָ��ǰ��ͷ��
  // Ҳ������p�������ڴ�
  this.head.next = null
  this.head = p
  return this // Ҳ����ʱ�ķ�ת����
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
