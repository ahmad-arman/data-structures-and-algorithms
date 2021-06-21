'use strict';

const meargesort =require('../Reverse-sorted');




describe('merge Sort', () => {

  it('should return merge sort', () => {
    // arrange
    let array =[20,90,5,10,-4];

    // act
    let newArray = meargesort(array);
    // assert
    expect(newArray).toEqual([-4,5,10,20,90]);
    expect(newArray[2]).toEqual(10);
  });

  it('should return merge sort', () => {
    // arrange

    let array =[9,100,150,200,0,-20];

    // act
    let newArray = meargesort(array);
    // assert

    expect(newArray).toEqual([-20,0,9,100,150,200]);
    // expect(node.next).toEqual(null);
  });
















});
