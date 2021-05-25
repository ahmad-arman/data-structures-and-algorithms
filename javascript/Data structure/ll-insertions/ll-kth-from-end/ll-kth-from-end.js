
'use strict';
const Node = require('./index');
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let node = new Node(value);
    try {
      if (!this.head) {// empty linked list
        this.head = node;
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = node;
      }
    }
    catch (error){
      console.error(' error in function append', error);
    }
  }

  checkLength() {
    let curr = this.head;
    let counter = 0;
    while (curr)
    {
      curr = curr.next;
      counter++;
    }
    return counter;
  }
  kthFromEnd(k) {
    let curr = this.head;
    let length = 0;
    if (k < 0) {
      throw `failed get negative number  Can not  accept a  negative number`;
    }
    let checkLength = this.checkLength();
    if (k >= checkLength) {
      throw `failed get number  the number is bigger   than the length of the linked list`;
    }
    let numFind = checkLength-k;
    while (curr) {
      length++;
      if (length === numFind) {
        return curr.value;
      }
      curr = curr.next;
    }
    throw `failed get number  the linked list is shorter  than ${numFind} nodes.`;
  }
}
module.exports = LinkedList;
