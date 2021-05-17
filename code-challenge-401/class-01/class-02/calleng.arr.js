


let arrayData = [30,2,4,7,9,23,12];
function insertShiftArray (array , num){
  let newArrary =  [];


  let center = Number.parseInt(array.length/2);


  for (let i = 0; i<=array.length-1; i++){
    if(i === center){
      newArrary.push(num);
      newArrary.push(array[i]);
    }
    else
      newArrary.push(array[i]);
  }

  console.log(newArrary);
  return newArrary;
}
insertShiftArray(arrayData,100);
module.exports = insertShiftArray;
