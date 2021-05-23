'use strict';

// Require our linked list implementation
const LinkedList = require('../ll-insertions');
const Node =require('../index');



const { expect } = require('@jest/globals');

describe('liked list class', () => {
  it(' Can successfully add a node to the end of the linked list', () => {
    //arrange
    let newlink = new LinkedList();
    let value = '10';
    //act
    newlink.append(value);
    //assert
    // expect(newlink.head).not().toBeNull();
    expect(newlink.head.value).toEqual(value);
    expect(newlink.head.next).toBeNull();
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    //arrange
    let newlink = new LinkedList();
    let value = '10';
    let value1 = '12';
    //act
    newlink.append(value);
    newlink.append(value1);
    //assert
    // expect(newlink.head).not().toBeNull();
    // console.log(newlink);
    expect(newlink.head.value).toEqual('10');
    expect(newlink.head.next.value).toEqual('12');
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    //arrange
    let newlink = new LinkedList();
    let value = 1;
    let value1 = 2;
    let value2 =3;
    let value3 = 3;
    //act
    newlink.append(value);
    newlink.append(value1);
    newlink.append(value2);
    newlink.append(value3);
    newlink.insertBefore(3,7);

    //assert
    // expect(newlink.head).not().toBeNull();
    console.log(newlink,"aaaaaaaaaaaaaaaaaaaaaa");
    expect(newlink).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 3}, "value": 3}, "value": 7}, "value": 2}, "value": 1}});
    // expect(newlink.head.next.value).toEqual('12');
  });

  it('Can successfully insert a node before the first node of a linked lis', () => {
    //arrange
    let newlink = new LinkedList();
    newlink.append(4);
    newlink.append(6);
    newlink.append(8);
    newlink.append(9);
    //act
    newlink.insertBefore(4,7);
    //assert
    console.log(newlink);
    expect(newlink).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 9}, "value": 8}, "value": 6}, "value": 4}, "value": 7}});
  });


  it('Can successfully insert after a node in the middle of the linked list', () => {
    //arrange
    let newlink = new LinkedList();
    newlink.append(4);
    newlink.append(6);
    newlink.append(8);
    newlink.append(9);
    //act
    newlink.insertAfter(8,5);
    //assert
    expect(newlink).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 9}, "value": 5}, "value": 8}, "value": 6}, "value": 4}});
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    //arrange
    let newlink = new LinkedList();
    newlink.append(4);
    newlink.append(6);
    newlink.append(8);
    newlink.append(9);
    //act
    newlink.insertAfter(9,5);
    //assert
    expect(newlink).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 5}, "value": 9}, "value": 8}, "value": 6}, "value": 4}});
  });




});
