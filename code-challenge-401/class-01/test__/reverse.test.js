'use strict' ;
const arrayRev = require ('../reverse');

describe('reverse', () => {
  it('should return the number reverse ',() => {
    expect(arrayRev([1,3,6,5,7])).toStrictEqual([7,5,6,3,1]);
  });
});
