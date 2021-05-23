'use strict';

// Require our linked list implementation
const LinkedLilst = require('../linked-list');
const Node =require('../index');

// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });


const { expect } = require('@jest/globals');

describe('liked list class', () => {

  it('should create new object', () => {
    // arrange
    let value = 5;
    // act
    let node = new Node(value);
    // assert
    expect(node.value).toEqual(5);
    expect(node.next).toEqual(null);
  });

  it('Can successfully instantiate an empty linked list',()=>{

    //arrange
    let empty = new LinkedLilst();

    expect(empty.head).toEqual(null);
  });
  it('should add new item to empty linked list', () => {
    //arrange
    let newlink = new LinkedLilst();
    let value = 'a';
    //act
    newlink.add(value);
    //assert
    // expect(newlink.head).not().toBeNull();
    expect(newlink.head.value).toEqual(value);
    expect(newlink.head.next).toBeNull();
  });

  it ('can properly insert multiple nodes into the linked list and Can properly return a collection of all the values that exist in the linked list',()=>{
    //arrange
    let newlink = new LinkedLilst();
    newlink.add(8);
    newlink.add(9);
    newlink.add(10);
    expect(newlink).toEqual({"head": {"next": {"next": {"next": null, "value": 10}, "value": 9}, "value": 8}});
  });


  it('should add new item to not empty linked list', () => {
    //arrange
    let newlink = new LinkedLilst();
    newlink.add(5);
    let newValue = 10;
    //act
    newlink.add(newValue);
    //assert
    expect(newlink.head.next.value).toEqual(newValue);
    expect(newlink.head.next.next).toBeNull();
  });

  it('should add new Head', () => {
    //arrange
    let newlink = new LinkedLilst();
    newlink.add(5);
    let newValue = 10;
    //act
    newlink.addNewHead(newValue);
    //assert
    expect(newlink.head.value).toEqual(newValue);
    expect(newlink.head.next.value).toEqual(5);
  });

  it('should insert item', () =>{
    // arrange
    let newLink = new LinkedLilst();
    newLink.add(9);
    let value = 1 ;
    // act
    newLink.insert(value);
    // assert
    expect(newLink.head.value).toEqual(1);
  });

  it('should return boolean true if include false if not include', () =>{
    // arrange
    let newLink = new LinkedLilst();
    newLink.add(9);
    newLink.add(8);
    newLink.add(7);
    newLink.add(6);
    newLink.add(5);
    let value = 1 ;
    let value2 = 7 ;
    // act
    newLink.include(value);
    newLink.include(value2);
    // assert
    expect(newLink.include(value)).toEqual(false);
    expect(newLink.include(value2)).toEqual(true);
  });

  it('should return string', () =>{
    // arrange
    let newLink = new LinkedLilst();
    newLink.add(9);
    newLink.add(8);
    newLink.add(7);
    newLink.add(6);
    newLink.add(5);

    // act
    newLink.toString();

    // assert
    expect(newLink.toString()).toEqual(('"{ 9 } -> { 8 } -> { 7 } -> { 6 } -> { 5 } -> NULL"'));

  });










});

