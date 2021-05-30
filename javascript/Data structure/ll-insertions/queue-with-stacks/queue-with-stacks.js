'use strict';
const Node = require('../index.js');


const stake = require('../stack-and-queue/stack-and-queue.js');


class PseudoQueue {//FIFO
  constructor() {
    this.stackOne= new (stake.Stack);
    this.stackTwo= new (stake.Stack);
  }
  // to push the values inside stake one
  enqueue(val) {
    this.stackOne.push(val);
  }


  dequeue() {

    if (this.stackTwo.isEmpty()) {
      // check if the stack two empty go to the looping
      while (!this.stackOne.isEmpty()) {
        //check if stack one not empty go to do some thing
        let topValue = this.stackOne.top.value;
        let node = new Node (topValue);
        this.stackTwo.push(node);
        this.stackOne.pop();


        console.log('check for the top in stack two ',this.stackTwo.top.value);
      }
    }

    // to check if stack one and stack two empty or not
    if(this.stackOne.isEmpty() && this.stackTwo.isEmpty()){
      throw 'the stack one and two are empty ,you need to fill the stack one';
    }

    let topValueStakeTwo = this.stackTwo.pop();
    console.log('output ----------', topValueStakeTwo);

    console.log('check for  stackTwo ---------- ',this.stackTwo.top);

    return topValueStakeTwo;
  }

  isEmpty(){

    ((this.stackOne.isEmpty() && this.stackTwo.isEmpty()) ? true :false );

  }
}
module.exports = PseudoQueue;
