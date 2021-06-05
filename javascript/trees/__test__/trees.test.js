'use strict';

const Node = require('../node.js');
const trees = require('../trees.js');
let tree = null;

describe('Binary Tree', () => {
  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    //             1
    //     2               3
    // 6        -      4       5
    //     7
    // 8       9
    tree = new trees.BinaryTree(one);
  });

  // root - left - right
  it('should traverse tree using pre-order', () => {
    // arrange
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect(preOrderResult).toEqual(expected);
  });

  // left - root -right
  it('should traverse tree using in-order', () => {
    // arrange
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect(inOrderResult).toEqual(expected);
  });

  // left - right - root
  it('should traverse tree using post-order', () => {
    // arrange
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    // act
    let postOrderResult = tree.postOrder();
    // assert
    expect(postOrderResult).toEqual(expected);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    // arrange

    // act

    let test = new trees.BinarySearchTree();

    test.add(8);
    test.add(10);
    test.add(4);


    // assert
    expect(test.root.value).toEqual(8);
    expect(test.root.left.value).toEqual(4);
    expect(test.root.right.value).toEqual(10);

  });

  it('Can successfully add a left child and right child to a single root node', () => {
    // arrange

    // act

    let test = new trees.BinarySearchTree();

    test.add(8);
    test.add(10);
    test.add(12);
    test.add(6);
    test.add(7);


    // assert
    expect(test.root.value).toEqual(8);
    expect(test.root.right.value).toEqual(10);
    expect(test.root.right.right.value).toEqual(12);
    expect(test.root.left.value).toEqual(6);
    expect(test.root.left.right.value).toEqual(7);

  });



  it('Can successfully instantiate an empty tree', () => {
    // arrange

    // act

    let test = new trees.BinarySearchTree();

    // test.add(8);
    // test.add(10);
    // test.add(12);
    // test.add(6);
    // test.add(7);


    // assert
    expect(test.root).toBeNull();
    // expect(test.root.right.value).toEqual(10);
    // expect(test.root.right.right.value).toEqual(12);
    // expect(test.root.left.value).toEqual(6);
    // expect(test.root.left.right.value).toEqual(7);

  });



});
