'use strict';


function multiBracketValidation(input){
  let myArray = [];

  if( typeof input !== 'string'||input.length ===0 ){
    throw 'you input empty string or input is not string';
  }

  for (let i = 0; i < input.length; i++) {
    // const input = input.charAt(i);

    const lasArr =myArray[myArray.length-1];

    if(input[i]=== '(' || input[i]==='{' || input[i]==='[') {
      myArray.push(input[i]);
    }


    if (input[i]===')' &&lasArr=== '(' ||input[i]===']' &&lasArr=== '[' ||input[i]==='}' &&lasArr=== '{')
    {
      myArray.pop();
    }

    if( input[i]===')'&&lasArr!=='(' || input[i]==='}' &&lasArr!=='{' || input[i]===']' &&lasArr!=='[')
    {

      return false ;

    }



  }
  return (myArray.length===0) ?true :false;
}
// multiBracketValidation();
// let ahmad ;
module.exports =multiBracketValidation;
// console.log(multiBracketValidation('{}'));
// console.log(multiBracketValidation('{}(){}'));
// console.log(multiBracketValidation('()[[Extra Characters]]'));
// console.log(multiBracketValidation('(){}[[]]'));
// console.log(multiBracketValidation('{}{Code}[Fellows](())'));
// console.log(multiBracketValidation('[({}]'));
// console.log(multiBracketValidation('(]('));
// console.log(multiBracketValidation('{(})'));

// console.log(multiBracketValidation('{'));
// console.log(multiBracketValidation(']'));
// console.log(multiBracketValidation('[}'));
// console.log(multiBracketValidation(''));
