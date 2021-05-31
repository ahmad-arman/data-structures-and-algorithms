'use strict';


// Require our linked list implementation

const AnimalShelter = require('../fifo-animal-shelter');



const { expect } = require('@jest/globals');

describe('AnimalShelter class', () => {
  it(' Can successfully add dog or cat to  the array', () => {
    //arrange
    let myAnimal = new AnimalShelter();
    let value = 'cat';
    let value1 = 'dog';
    // let value2 ='ahmad';
    //act
    myAnimal.enqueue(value);
    myAnimal.enqueue(value1);
    //assert
    // expect(newlink.head).not().toBeNull();
    expect(myAnimal.values[0]).toEqual('{animal : cat}');
    expect(myAnimal.values[1]).toEqual('{animal : dog}');
  });

  it(' Can successfully return throw error', () => {
    //arrange
    let myAnimal = new AnimalShelter();
    let value = 'ahmad';

    //act

    //assert

    expect(() => myAnimal.enqueue(value).animal).toThrow('you have error ,you need to add dog or cat');

  });

  it(' Can successfully when use dequeue return null', () => {
    //arrange
    let myAnimal = new AnimalShelter();
    let value = 'ahmad';

    //act

    //assert

    expect(myAnimal.dequeue(value)).toEqual('{animal : null }');

  });



});
