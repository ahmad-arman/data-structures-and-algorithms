





'use strict';

const Node = require('./index');

class LinkedList {
  constructor () {
    this.head = null;

  }
  add(value) {
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

    catch(error) {
      console.error('your error:',error);
    }
  }



  addNewHead(value) {
    let newNode = new Node(value);
    try {
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    catch(error) {
      console.error('your error:',error);
    }
  }

  insert(value){
    try {
      this.head = new Node(value) ;

    }

    catch(error) {
      console.error('your error:',error);
    }
  }


  include(value){

    try {
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

    catch(error) {
      console.error('your error:',error);
    }

  }

  toString(){
    try {
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

    catch(error) {
      console.error('your error:',error);
    }
  }


}

module.exports = LinkedList ;








