'use strict';


// linked list class
const LinkedList = require('./LL');






// hash table class

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;
    return hash;
  }


  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[hash].add(keyValuePair);
  }


  get(key) {
    const myIndex = this.hash(key);
    const mySearch = this.table[myIndex];
    console.log(mySearch ,'search');
    if (!mySearch) return null;
    return mySearch.values(key);
  }


  getOne(key){
    const myIndex = this.hash(key);
    const mySearch = this.table[myIndex];
    if(mySearch===null) return null;
    return mySearch.value(key);
  }


  contains(key) {
    const myIndex = this.hash(key);
    const mySearch = this.table[myIndex];
    if (mySearch===null) return false;
    return mySearch.includes(key);
  }

}


let hash = new HashTable(1021);
hash.add('marah', 'Boss');
hash.add('ahmad', 'Boss');
hash.add('Cathy', 'The Real Boss');
hash.add('Zach', 'Kid 1');
hash.add('Allie', 'Kid 2');
hash.add('Rosie', 'Dog');
hash.add('Cat', 'TA');
hash.add('Justin', 'Student');
hash.add('Jason', 'Student');
hash.add('Jason', 'Student');








module.exports = HashTable;
