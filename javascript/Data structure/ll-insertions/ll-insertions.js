/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
'use strict';


const Node = require('./index');
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

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
      console.error('Ann error occured: ', error);
    }
  }
  insertBefore(value, newValue) {
    let curr = this.head;
    let past;
    while ((curr) && (curr.value !== value)) {
      past = curr;
      curr = curr.next;
    }
    if (!curr) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newValue);
      newNode.next = curr;
      if (curr === this.head) {
        this.head = newNode;
      } else {
        past.next = newNode;
      }
    }
  }
  insertAfter(value, newValue) {
    let curr = this.head;
    while ((curr) && (curr.value !== value)) {
      curr = curr.next;
    }
    if (!curr) {
      throw `Value ${value} not found in linked list.`;
    } else {
      const newNode = new Node(newValue);
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }


}

module.exports = LinkedList ;
