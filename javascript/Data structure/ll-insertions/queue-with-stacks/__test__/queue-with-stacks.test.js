'use strict';
let PseudoQueue = require('../queue-with-stacks.js');


describe('Pseudo Queue  myTest', () => {
  it('Can successfully append into Queue', () => {
    // arrange
    let myPseudoQueue = new PseudoQueue;


    // act
    myPseudoQueue.enqueue(10);
    myPseudoQueue.enqueue(20);
    myPseudoQueue.enqueue(30);



    // assert
    expect(myPseudoQueue.stackOne.top.value).toEqual(30);
  });


  it('Can successfully error when Queue is empty', () => {
    // arrange
    let myTest = new PseudoQueue;
    // act


    // assert
    expect(() => myTest.dequeue()).toThrow('the stack one and two are empty ,you need to fill the stack one');
  });


  it('Can successfully throw an exception after filling the Queue and emptying it', () => {
    // arrange
    let myTest = new PseudoQueue;
    // act
    myTest.enqueue(10);
    myTest.enqueue(20);
    myTest.enqueue(30);

    myTest.dequeue();
    myTest.dequeue();
    myTest.dequeue();

    // assert
    expect(() => myTest.dequeue()).toThrow('the stack one and two are empty ,you need to fill the stack one');
  });
  it('Can successfully dequeue from non empty stack one ', () => {
    // arrange
    let myTest = new PseudoQueue;
    // act
    myTest.enqueue(10);
    myTest.enqueue(20);
    myTest.enqueue(30);

    myTest.dequeue();
    // assert
    expect(myTest.stackTwo.top.value.value).toEqual(20);
  });


});
