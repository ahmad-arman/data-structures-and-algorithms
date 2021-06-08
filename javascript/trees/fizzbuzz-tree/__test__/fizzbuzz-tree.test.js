'use strict';

const data =require('../fizzbuzz-tree.js');

describe('K ary Tree', () => {
  beforeAll(() => {
    // let node1 = new data.Node(15);
    // let node2 = new data.Node(6);
    // let node3 = new data.Node(3);
    // let node4 = new data.Node(10);
    // let node5 = new data.Node(30);
    // let node6 = new data.Node(20);
    // let node7 = new data.Node(120);
    // let node8 = new data.Node(69);
    // let node9 = new data.Node(100);
    // node1.child.push(node9);
    // node1.child.push(node8);
    // node1.child.push(node6);
    // node4.child.push(node5);
    // node4.child.push(node4);
    // node3.child.push(node7);
    // node3.child.push(node3);
    // node5.child.push(node2);


    // let newTree = new data.Tree();
    // newTree.root = node1;
    // data.fizzBuzzTree(newTree);


  });

  // root - left - right
  it('should traverse tree using pre-order', () => {
    // arrange
    let node1 = new data.Node(15);

    // assert
    expect(node1.value).toEqual(15);
  });

  it('should traverse tree using pre-order', () => {
    // arrange
    let node1 = new data.Node(15);
    let node8 = new data.Node(69);
    let node9 = new data.Node(100);
    node1.child.push(node9);
    node1.child.push(node8);

    // assert
    expect(node1.value).toEqual(15);
    expect(node1.child[1].value).toEqual(69);
    expect(node1.child[0].value).toEqual(100);
  });

  it('should traverse tree using pre-order', () => {
    // arrange
    let node1 = new data.Node(15);
    let node2 = new data.Node(6);
    let node3 = new data.Node(3);
    let node4 = new data.Node(10);
    let node5 = new data.Node(30);
    let node6 = new data.Node(20);
    let node7 = new data.Node(120);
    let node8 = new data.Node(69);
    let node9 = new data.Node(100);
    node1.child.push(node9);
    node1.child.push(node8);
    node1.child.push(node6);
    node4.child.push(node5);
    node4.child.push(node4);
    node3.child.push(node7);
    node3.child.push(node3);
    node5.child.push(node2);


    let newTree = new data.Tree();
    newTree.root = node1;
    let test=  data.fizzBuzzTree(newTree);

    // assert
    expect( test.root.child[0].value).toEqual('Buzz');
    expect(test.root.child[1].value).toEqual('Fizz');
    expect(test.root.child[2].value).toEqual('Buzz');
    expect(test.root.value).toEqual('FizzBuzz');

  });





});

