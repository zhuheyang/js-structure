module.exports = Node
function Node(key, value) {
  this.key_ = key
  this.value_ = value
}
Node.prototype.getKey = function () {
  return this.key_
}
Node.prototype.getValue = function () {
  return this.value_
}
Node.prototype.clone = function () {
  return new Node(this.key_, this.value_)
}
