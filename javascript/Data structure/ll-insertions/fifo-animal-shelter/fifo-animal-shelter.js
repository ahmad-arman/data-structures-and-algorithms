'use strict';

class AnimalShelter {
  constructor(){
    this.values = [];
  }

  enqueue(animal) {

    if (animal!=='cat' && animal!=='dog'){

      throw 'you have error ,you need to add dog or cat';
    }

    // this.values.push(animal);
    this.values.push(`{animal : ${animal}}`);


  }
  dequeue(pref){

    // return ((pref === 'cat') || (pref === 'dog')) ? pref : null;

    return `{animal : ${((pref === 'cat') || (pref === 'dog')) ? pref : null} }` ;



  }}

// let ahmad = new AnimalShelter();
// ahmad.enqueue('cat');
// ahmad.enqueue('cat');
// ahmad.enqueue('cat');
// ahmad.enqueue('dog');
// ahmad.enqueue('dog');
// ahmad.enqueue('dog');
// ahmad.enqueue('dog');
// ahmad.enqueue('ahmad');
// // console.log(ahmad.dequeue('cat'));
// console.log(ahmad.dequeue('hh'));
// console.log(ahmad.dequeue('cat'));
// console.log(ahmad.dequeue('dog'));
// // ahmad.enqueue('cat');
// // ahmad.enqueue('ahmad');
// console.log(ahmad.values[0]);

module.exports = AnimalShelter;
