'use strict';

const Hash = require('../hash-table');


function repeatedWord(string){

  if((typeof string !== 'string') || (string === null)){
    throw 'Input can not allow  anything expect string ';
  } else {
    const myWords  =string.toLowerCase().split(/\W+/g);

    let hash = new Hash(myWords.length);

    for (let index in myWords){

      if(hash.contains(myWords[index])){

        return myWords[index];

      }else {

        hash.add(myWords[index],myWords[index]);

      }
    }



  }

  return 'No repeated words were found.';

}

// function repeatedWord(string){
//   if((typeof string !== 'string') || (string === null)){
//     throw 'Input shall be a string!';
//   }
//   const myWords=string.toLowerCase().split(/\W+/g);
//   let hash = new Hash(myWords.length);
//   for (let i in myWords){
//     if(hash.contains(myWords[i]))
//     { return myWords[i];}
//     else
//     { hash.add(myWords[i],myWords[i]);}
//   }
//   return 'No repeated words were found.';
// }
module.exports = repeatedWord ;
