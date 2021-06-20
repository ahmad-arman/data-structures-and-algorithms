function InsertionSort(array){


  for(let i =1 ; i < array.length ; i++ ){
    let j = i-1;
    let term = array[i];


    while(j >= 0 && term <array[j] ){
      array[j+1] = array[j];
      j = j -1;
    }

    array[j+1] = term;
  }

  return array;



}
module.exports =InsertionSort ;
// let array = [5,20,10,-6,90];
// console.log(InsertionSort(array));
