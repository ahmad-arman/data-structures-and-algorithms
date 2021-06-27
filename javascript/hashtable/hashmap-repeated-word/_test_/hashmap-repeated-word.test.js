'use strict';



const repeatedWord = require('../hashmap-repeated-word');


describe('Repeated Word',() => {

  it('Should  return first repeated word',() => {
    let text = 'I love eating, the eating is very nice';
    expect(repeatedWord(text)).toEqual('eating');
  });


  it('Should return that there is no repeated words',() => {
    let text = 'the eating is very nice';
    expect(repeatedWord(text)).toEqual('No repeated words were found.');
  });

  it('Should throw an exception if input is not a string',() => {
    expect(() => repeatedWord(896)).toThrow('Input can not allow  anything expect string ');
  });

});
