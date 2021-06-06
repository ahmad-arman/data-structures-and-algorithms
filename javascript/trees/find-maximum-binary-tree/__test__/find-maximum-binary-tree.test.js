'use strict';

const Node = require('../../node');
const Trees = require('../find-maximum-binary-tree');
let tree = null;

describe('Binary Tree', () => {
  beforeAll(() => {
    let one = new Node(10);// tree root
    let two = new Node(20);
    let three = new Node(30);
    let four = new Node(40);
    let five = new Node(50);
    let six = new Node(60);
    let seven = new Node(70);
    let eight = new Node(85);
    let nine = new Node(90);

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
    tree = new Trees(one);
  });

  // root - left - right
  it('should return the max value  ', () => {
    // arrange
   

    // act
    let findMaxValue = tree.findMaximumValue();
    // assert
    expect(findMaxValue).toEqual(90);
  });






});
