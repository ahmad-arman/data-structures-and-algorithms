





'use strict';

const Node = require('./index');

class LinkedList {
  constructor () {
    this.head = null;

  }
  add(value) {
    let node = new Node(value);
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



  addNewHead(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insert(value){
    this.head = new Node(value) ;
  }


  include(value){

    let boolean = false ;
    let check = this.head;
    while(check){
      if( check.value === value){
        boolean =true ;
        console.log('does is exist ?', boolean);
        return boolean;
      }
      check = check.next;
    }

    console.log('does is exist ?', boolean);
    return boolean ;

  }

  toString(){
    let array = [];
    let head = this.head ;
    while(head){
      array.push( '{ ');
      array.push(head.value);
      array.push(' }');
      array.push(' -> ');
      head=head.next ;
    }

    array.unshift('"');
    array.push('NULL"');
    let newArray= array.join('');
    console.log(newArray);
    return newArray;
  }


}

module.exports = LinkedList ;








