'use strict';

const quickSort =require('../QuickSort');




describe('quick Sort', () => {

  it('should return merge sort', () => {
    // arrange
    let array =[20,90,5,10,-4];


    // act
    let newArray = quickSort(array,0,array.length -1);
    // assert
    expect(newArray).toEqual([-4,5,10,20,90]);
    expect(newArray[2]).toEqual(10);
  });

  it('should return merge sort', () => {
    // arrange

    let array =[9,100,150,200,0,-20];

    // act
    let newArray = quickSort(array,0,array.length -1);
    // assert

    expect(newArray).toEqual([-20,0,9,100,150,200]);
    // expect(node.next).toEqual(null);
  });
















});
