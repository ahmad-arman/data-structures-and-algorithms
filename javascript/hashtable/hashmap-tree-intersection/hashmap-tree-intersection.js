
'use strict';
// const Hash = require('../hash-table');

const Node = require('../../trees/node');


const {BinaryTree} = require('../../trees/trees');




function myTreeIntersection(treeOne, treeTwo) {

  if(!treeOne.root || !treeTwo.root){
    return 'you should return two binary tree';
  }


  let treeArrOne = treeOne.inOrder();
  let treeArrTwo = treeTwo.inOrder();
  let data = [];

  for(let i = 0; i < treeArrOne.length; i++){

    if(treeArrTwo[i] === treeArrOne[i]){
      data[data.length] = treeArrTwo[i];
    }
    // if(treeArrTwo.includes(treeArrOne[i]) ){
    //   data.push(treeArrOne[i]);
    // }
  }
  return data;
}

// let treeOne = new BinaryTree;
// treeOne.root = new Node(93);
// treeOne.root.left = new Node(20);
// treeOne.root.right = new Node(42);
// treeOne.root.left.left = new Node(75);

// treeOne.root.right.left = new Node(200);
// treeOne.root.right.right = new Node(350);
// treeOne.root.right.right.left = new Node(4);
// treeOne.root.right.right.right = new Node(99);

// const treeTwo = new BinaryTree;
// treeTwo.root = new Node(93);
// treeTwo.root.left = new Node(20);
// treeTwo.root.right = new Node(96);
// treeTwo.root.left.left = new Node(15);

// treeTwo.root.right.left = new Node(200);
// treeTwo.root.right.right = new Node(350);
// treeTwo.root.right.right.left = new Node(4);
// treeTwo.root.right.right.right = new Node(99);

// console.log(myTreeIntersection(treeOne,treeTwo));

// let node1 = new Node(10);
// let node2 = new Node(5);
// let node3 = new Node(2);
// let node4 = new Node(40);

// node1.left=node2;
// node1.right=node3;
// node3.left=node4;



// let node5 = new Node(5);
// let node6 = new Node(1);
// let node7 = new Node(2);
// let node8 = new Node(10);


// console.log(treeOne);


module.exports = { Node, BinaryTree, myTreeIntersection };

