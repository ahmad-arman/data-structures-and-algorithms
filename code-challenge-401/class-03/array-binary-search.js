

'use strict';

let arrayData = [4,5,6,7,8,9];
function binarySearch(sortedArray,key){
  let first = false;
  let result = -1;
  for (let i in sortedArray){
    if(sortedArray[i] === key){
      result = i;
      first = true;
      return result;
    }}
  if (!first)
    return result;
}


console.log(binarySearch(arrayData,3));

module.exports= {
  binarySearch: binarySearch
};

