'use strict';

// let arrayData =[1,3,6,5,7];
function arrayRev(array){
  let newArray =[];
  for (let index = array.length-1; index >= 0 ; index--) {
    newArray.push(array[index]);

  }
  console.log(newArray);
  return newArray;
}
// arrayRev(arrayData);
module.exports = arrayRev ;
