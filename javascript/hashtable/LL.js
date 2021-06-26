'use strict';
// node class //
const Node = require('./node');



class LinkedList {
  constructor() {
    this.head = null;
  }


  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  value(key) {
    let value;
    let current = this.head;
    while (current) {
      if(`${key}` in current.value){
        value = current.value;
        break;
      }
      current= current.next;
    }
    return value;
  }
  includes(key) {
    let current = this.head;
    let check = false;
    while (current) {
      if (`${key}` in current.value) {
        check = true;
      }
      current = current.next;
    }
    return check;
  }
}

module.exports = LinkedList;
