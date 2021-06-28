'use strict';

const { Node, BinaryTree, myTreeIntersection } = require('../hashmap-tree-intersection');

describe('testing tree intersection function', () => {


  let myTreeOne = new BinaryTree;

  myTreeOne.root = new Node(93);
  myTreeOne.root.left = new Node(20);
  myTreeOne.root.right = new Node(42);
  myTreeOne.root.left.left = new Node(75);
  myTreeOne.root.right.left = new Node(200);
  myTreeOne.root.right.right = new Node(350);
  myTreeOne.root.right.right.left = new Node(4);
  myTreeOne.root.right.right.right = new Node(99);



  const myTreeTwo = new BinaryTree;

  myTreeTwo.root = new Node(93);
  myTreeTwo.root.left = new Node(20);
  myTreeTwo.root.right = new Node(96);
  myTreeTwo.root.left.left = new Node(15);
  myTreeTwo.root.right.left = new Node(200);
  myTreeTwo.root.right.right = new Node(350);
  myTreeTwo.root.right.right.left = new Node(4);
  myTreeTwo.root.right.right.right = new Node(99);




  it('should return array ', () => {
    let myTest = myTreeIntersection(myTreeOne, myTreeTwo);

    expect(myTest).toEqual([ 20, 93, 200, 4, 350, 99 ]);
  });

  it('should return error', () => {
    let ahh =55;
    let myTest = myTreeIntersection(ahh, myTreeTwo);

    expect(myTest).toEqual('you should return two binary tree');
  });

});
