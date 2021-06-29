'use strict';
const Node = require('../index');
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
  checkLength() {
    let current = this.head;
    let count = 0;
    while (current)
    {
      current = current.next;
      count++;
    }
    return count;
  }
  toString() {
    try {
      let head = this.head;
      let result = [];
      while(head) {
        result.push(' { ');
        result.push(head.value);
        result.push(' } ');
        result.push(' -> ');
        head = head.next;
      }
      result.push('NULL');
      return result.join('');
    } catch (error) {
      console.error(error);
    }
  }
}
let zipLists = function (LL1,LL2){
  if(!LL1.head || !LL2.head){
    return `Error, you should use linked-list only`;
  }
  let newLinkedList = new LinkedList;
  let lv1 = LL1.head;
  let lv2 = LL2.head;
  let length1 = LL1.checkLength();
  let length2 = LL2.checkLength();
  let newLen = length1+length2;
  for(let i=0; i<= newLen; i++){
    if(lv1){
      newLinkedList.append(lv1.value);
      lv1 = lv1.next;
    }
    if(lv2){
      newLinkedList.append(lv2.value);
      lv2 = lv2.next;
    }
  }
  return newLinkedList;
};
module.exports ={
  LinkedList,
  zipLists
};

function size(ll){
  let size =0 ;
  let current = ll.head ;
  while(current){
    size++;
    current = current.next;
  }
  return size;
}


function zibLinkedList(ll1,ll2){
  let newLinkedList =new LinkedList;

  let current1 = ll1.head;
  let current2= ll2.head;
  let newSize = ll1.size() + ll2.size();

  for(let i=0; i< newSize.length ; i++ ){

    if(current1){
      newLinkedList.append(current1.value);
      current1 =current1.next;
    }
    if(current2){
      newLinkedList.append(current2.value);
      current2 =current2.next;
    }
  }
  return newLinkedList ;
}
