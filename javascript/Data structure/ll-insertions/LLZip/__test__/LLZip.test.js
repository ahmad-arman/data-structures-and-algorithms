'use strict';
const Node = require('../../index');
const {LinkedList, zipLists} = require('../LLZip');
const { expect } = require('@jest/globals');
describe('node class Test', () => {
  it('Can successfully zip two linked-list', () => {
    let nodeOne = new LinkedList;
    let nodeTwo = new LinkedList;
    nodeOne.append('10');
    nodeOne.append('11');
    nodeOne.append('12');
    nodeOne.append('13');
    nodeTwo.append('14');
    nodeTwo.append('15');
    //assert
    expect(zipLists(nodeOne,nodeTwo).toString()).toEqual(' { 10 }  ->  { 14 }  ->  { 11 }  ->  { 15 }  ->  { 12 }  ->  { 13 }  -> NULL');
  });
  it('should retrun an error if the input is not linked-list', () => {
    expect(zipLists('melon','waterMelon').toString()).toEqual('Error, you should use linked-list only');
  });
  it('should zip both linked lists when both lengths are equal', () => {
    // arrange
    let nodeOne = new LinkedList;
    let nodeTwo = new LinkedList;
    nodeOne.append('10');
    nodeOne.append('11');
    nodeOne.append('12');
    nodeTwo.append('13');
    nodeTwo.append('14');
    nodeTwo.append('15');
    // act
    // assert
    expect(zipLists(nodeOne,nodeTwo).toString()).toEqual(' { 10 }  ->  { 13 }  ->  { 11 }  ->  { 14 }  ->  { 12 }  ->  { 15 }  -> NULL');
  });
});