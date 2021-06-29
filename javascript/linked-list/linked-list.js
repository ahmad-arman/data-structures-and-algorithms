

// class Node {

//   constructor (value){
//     this.value = value ;
//     this.next =null;
//   }
// }

// class LinkedList {

//   constructor (){
//     this.head =null ;
//   }

//   add(value){
//     let node= new Node(value);
//     if(!this.head){
//       this.head = node;
//     }else {

//       let lastNode = this.head;
//       while(lastNode.next){

//         lastNode = lastNode.next;
//       }
//       lastNode.next = node ;
//     }

//   }


//   addNewHead (value){
//     let node = new Node(value);
//     if(!this.head){
//       this.head =node;
//     }
//     else {
//       node.next = this.head ;
//       this.head = node;
//     }
//   }
//   insert (value ){
//     this.head = new Node(value);
//   }

//   included(value){
//     let current = this.head ;
//     let bool = false ;
//     while(current){

//       if(current.value === value){
//         bool =true;

//       }
//       current = current.next;
//     }

//     return bool ;

//   }

//   sumAllValue(){
//     let current = this.head ;
//     let sum = 0 ;
//     while(current){
//       sum += current.value;
//       current = current.next;
//     }
//     return sum ;

//   }

//   sumAllOddNumber(){
//     let current = this.head ;
//     let sumAllOddNum = 0;
//     while(current){
//       if( current.value % 2 === 1){
//         sumAllOddNum += current.value ;
//       }

//       current = current.next ;
//     }
//     return sumAllOddNum ;
//   }

//   toString(){
//     let newArray =[];
//     let current = this.head ;
//     let size =0;

//     while(current){
//       size++;
//       newArray.push(current.value);

//       current = current.next ;
//     }
//     console.log(size);
//     return newArray;
//   }
//   size1(){
//     let size =0 ;
//     let current = this.head;

//     while(current){
//       size++;
//       current=current.next;
//     }
//     return size;
//   }
//   midValue(){
//     let current = this.head ;
//     let size =0;
//     while(current){
//       size++;
//       // console.log(size);
//       // console.log((this.size1()));

//       if(Math.floor(Math.ceil(this.size1() / 2))=== size){
//         console.log('a');
//         break;
//       }
//       current =current.next ;
//     }
//     return current.value;
//   }
// }

// let newLin =new LinkedList();
// newLin.add(10);
// newLin.add(6);
// newLin.add(7);
// newLin.add(8);
// newLin.add(9);
// newLin.add(5);
// newLin.add(2);
// newLin.add(1);

// console.log(newLin.midValue() ,'aaaaaaaaaaa');


// function sumAllValue(ll){

//   let current = ll.head ;
//   let sum = 0 ;
//   while(current){
//     sum += current.value;
//     current =current.next ;
//   }
//   return sum;
// }



// let node1 =new Node(5);

// let node2 =new Node(4);
// let node3 =new Node(10);




//  let newLinkedList = new LinkedList()
// newLinkedList.head =node1;
// node1.next = node2;
// node2.next=node3;

// let resulet = function(newLinkedList)

// console.log(result);

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








