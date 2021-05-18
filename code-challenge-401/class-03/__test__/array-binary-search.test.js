'use strict';



const newArray = require ('../array-binary-search');

describe('array-binary-search', () => {
  it('should return the number ',() => {
    expect(newArray.binarySearch([4,5,6,7,8,9],8)).toStrictEqual('4');
  });
});
