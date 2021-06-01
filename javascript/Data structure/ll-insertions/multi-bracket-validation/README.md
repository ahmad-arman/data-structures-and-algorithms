# Challenge Summary
Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

* Round Brackets : () 
* Square Brackets : []
* Curly Brackets : {}

## Whiteboard Process
![multi-bracket-validation](./multi-bracket-validation.png)

## Approach & Efficiency
 Time --> O(n)<br>
 space --> O(n)<br>

## Solution
 Run in Your terminal 
 `npm test multi-bracket-validation.test.js`


 console.log(isBalance('{}')); <br>
 console.log(isBalance('{}(){}'));<br>
 console.log(isBalance('()[[Extra Characters]]'));<br>
 console.log(isBalance('(){}[[]]'));<br>
 console.log(isBalance('{}{Code}[Fellows](())'));<br>
 console.log(isBalance('[({}]'));<br>
 console.log(isBalance('(]('));<br>
 console.log(isBalance('{(})'));<br>

 console.log(isBalance('{'));<br>
 console.log(isBalance(']'));<br>
 console.log(isBalance('[}'));<br>
 console.log(isBalance(''));  <br>
