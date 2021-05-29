'use strict';

const Node = require('./node');


class Stack {//LIFO
  constructor() {
    this.top = null;

  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }
  pop() {
    if(this.top===null){
      throw 'the empty stack, top equal null!';
    }
    let node = this.top.next;
    this.top = node;
    return this;
  }
  peek() {
    if(this.top===null){
      throw 'the empty stack, top equal null!';
    }
    return this.top.value;
  }
  isEmpty(){
    return (this.top ===null) ? true : false;}


}
class Queue {//FIFO
  constructor() {
    this.front= null;
    this.back= null;
  }
  enqueue(value) {
    const node = new Node(value);
    if(this.front===null){
      this.front = node;
      this.back = node;
    }
    else {
      node.next = this.back;
      this.back = node;
    }
  }
  dequeue() {
    if(this.back ===null){
      throw 'the empty queue, back equal null!';
    }
    let node = this.back;
    if(this.back === this.front){
      this.front= null;
      this.back = null;
    }
    else{
      while(node.next){
        if(node.next === this.front){
          break;
        }
        node = node.next;
      }
      node.next= null;
      this.front = node;
    }
  }
  peek() {
    if(this.back === null){
      throw 'the empty queue, back equal null!';
    }
    return this.front.value;
  }
  isEmpty(){
    return (this.back ===null) ? true : false;}


}

module.exports ={Stack,Queue};






