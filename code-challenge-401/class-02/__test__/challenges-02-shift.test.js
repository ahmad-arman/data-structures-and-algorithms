'use strict';



const newArray = require ('../calleng.arr');

describe('calleng.arr', () => {
  it('should return the number ',() => {
    expect(newArray([30,2,4,7,9,23,12],100)).toStrictEqual([30,2,4,100,7,9,23,12]);
  });
});



