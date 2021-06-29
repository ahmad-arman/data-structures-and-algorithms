'use strict';



function leftJoin(leftHashTable,rightHashTable) {
  if((leftHashTable === undefined) || (rightHashTable === undefined)){
    throw 'Inputs must not be a null ';
  }
  if((!leftHashTable.size) || (!rightHashTable.size)){
    throw 'Inputs must be hash table ';
  }


  let data = [];
  let myTableL = leftHashTable.table;
  for (let i = 0; i <= myTableL.length - 1; i++) {


    if(myTableL[i]){
      let key = Object.keys(myTableL[i].head.value)[0];

      let value = Object.entries(myTableL[i].head.value)[0];
      let check = rightHashTable.contains(key);
      if(check){
        let rightData = Object.entries(rightHashTable.getOne(key));

        let value1 = Object.values(rightData)[0][1];
        data.push([...value,value1]);
      }
      if(!check){
        data.push([...value,'NULL']);
      }
    }


  }
  return data;
}
module.exports = leftJoin;


// leftHashTable.table.forEach((data, i) => {
//     console.log(i, data && data.values());
//     });
//     console.log('-----------------------------------');
//     console.log(leftHashTable.table.length);
//     console.log('-----------------------------------');
//     console.log(rightHashTable.table.length);
//     console.log('-----------------------------------');
//     rightHashTable.table.forEach((data, i) => {
//     console.log(i, data && data.values());
//     });
//     console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||');
//     console.log(leftJoins(leftHashTable,rightHashTable));
//     console.log(leftJoins(rightHashTable,leftHashTable));
//     console.log(leftJoins(2,rightHashTable));
//     console.log(leftJoins(leftHashTable,'string'));
//     console.log(leftJoins(leftHashTable));
//     console.log(leftJoins(rightHashTable));
//     console.log(leftJoins());