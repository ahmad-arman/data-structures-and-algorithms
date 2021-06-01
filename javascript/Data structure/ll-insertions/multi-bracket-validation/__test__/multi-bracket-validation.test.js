'use strict';

const multiBracketValidation =require('../multi-bracket-validation');
// console.log(isBalance({}));


describe('node class Test', () => {
  it('Can successfully test', () => {

    // let node = new app.Stack ;


    // node.push('10');


    //assert
    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}(){}')).toEqual(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('(](')).toEqual(false);
    expect(multiBracketValidation('{(})')).toEqual(false);
    expect(multiBracketValidation('{')).toEqual(false);
    expect(multiBracketValidation(']')).toEqual(false);
    expect(multiBracketValidation('[}')).toEqual(false);

    expect(() => multiBracketValidation('').toThrow(`you input empty string or input is not string`));






  });



});
