'use strict';

// Require our linked list implementation
const LinkedLilst = require('../linked-list');


// describe('Linked List', () => {
//   it('works', () => {
//     expect(true).toBeTruthy();
//   });
// });


const { expect } = require('@jest/globals');

describe('liked list class', () => {
  it('should add new item to empty linked list', () => {
    //arrange
    let ll = new LinkedLilst();
    let value = 'a';
    //act
    ll.add(value);
    //assert
    // expect(ll.head).not().toBeNull();
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
  });

  
  it('should add new item to not empty linked list', () => {
    //arrange
    let ll = new LinkedLilst();
    ll.add(5);
    let newValue = 10;
    //act
    ll.add(newValue);
    //assert
    expect(ll.head.next.value).toEqual(newValue);
    expect(ll.head.next.next).toBeNull();
  });

  it('should add new Head', () => {
    //arrange
    let ll = new LinkedLilst();
    ll.add(5);
    let newValue = 10;
    //act
    ll.addNewHead(newValue);
    //assert
    expect(ll.head.value).toEqual(newValue);
    expect(ll.head.next.value).toEqual(5);
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

