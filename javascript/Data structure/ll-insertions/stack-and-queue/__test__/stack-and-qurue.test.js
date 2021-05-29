'use strict';
const Node = require('../node');

const app = require('../stack-and-queue');

const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('Can successfully push onto a stack', () => {

    let node = new app.Stack ;


    node.push('10');


    //assert
    expect(node.top).toEqual({'next': null, 'value': '10'});
  });

  it('Can successfully push multiple values onto a stack', () => {

    let node = new app.Stack ;


    node.push('10');
    node.push('11');

    //assert
    expect(node.top).toEqual({'next': {'next': null, 'value': '10'}, 'value': '11'});
  });

  it('Can successfully pop off the stack', () => {

    let node = new app.Stack ;


    node.push('10');
    node.push('11');
    node.pop();

    //assert
    expect(node.top).toEqual({'next': null, 'value': '10'});
  });

  it('Can successfully empty a stack after multiple pops', () => {

    let node = new app.Stack ;


    node.push('10');
    node.push('11');

    node.pop();
    node.pop();

    //assert
    expect(node.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {

    let node = new app.Stack ;


    node.push(10);
    node.push(11);


    let test = node.peek();

    //assert
    expect(test).toEqual(11);
  });

  it('Can successfully instantiate an empty stack', () => {

    let node = new app.Stack ;


    // node.push(10);
    // node.push(11);


    let test = node.top;

    //assert
    expect(test).toEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception', () => {

    let node = new app.Stack ;


    // node.pop();
    // node.p();

    //assert
    // expect(test).throw(1);
    expect (() => node.pop()).toThrow('the empty stack, top equal null!');
  });

  it('Can successfully enqueue into a queue', () => {

    let node = new app.Queue ;


    node.enqueue(10);
    // node.enqueue(11);


    // let test = node;

    //assert
    expect(node.front.value).toEqual(10);
    // expect(node.back.value).toEqual(11);
  });

  it('Can successfully enqueue multiple values into a queue', () => {

    let node = new app.Queue ;


    node.enqueue(10);
    node.enqueue(11);


    // let test = node;

    //assert
    expect(node.front.value).toEqual(10);
    expect(node.back.value).toEqual(11);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {

    let node = new app.Queue ;


    node.enqueue(10);
    node.enqueue(11);
    node.dequeue();


    // let test = node;

    //assert
    expect(node).toEqual({'back': {'next': null, 'value': 11}, 'front': {'next': null, 'value': 11}});
    // expect(node).toEqual(11);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {

    let node = new app.Queue ;


    node.enqueue(10);
    node.enqueue(11);
    // node.peek();


    // let test = node;

    //assert
    expect(node.peek()).toEqual(10);
    // expect(node).toEqual(11);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    let node = new app.Queue ;


    node.enqueue(10);
    node.enqueue(11);

    node.dequeue();
    node.dequeue();
    // node.peek();


    // let test = node;

    //assert
    expect(node).toEqual({'back': null, 'front': null});
    // expect(node).toEqual(11);
  });

  it('Can successfully instantiate an empty queue', () => {

    let node = new app.Queue ;


    // node.enqueue(10);
    // node.enqueue(11);

    // node.dequeue();
    // node.dequeue();
    // node.peek();
    let test =node.front;


    // let test = node;

    //assert
    expect(test).toEqual(null);
    // expect(node).toEqual(11);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {

    let node = new app.Queue ;


    // node.enqueue(10);
    // node.enqueue(11);

    // node.dequeue();
    // node.dequeue();
    // node.peek();
    // let test =node.front;


    // let test = node;

    //assert
    expect(()=> node.peek()).toThrowError('the empty queue, back equal null!');
    // expect(node).toEqual(11);
  });





});
