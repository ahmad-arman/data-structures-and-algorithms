# Challenge Summary
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.
## Whiteboard Process
 ![image](./fifo-animal-shelter.png)

## Approach & Efficiency
 Time ----> B O(1) <br>
 space ----> O(n)<br>
## Solution
// let ahmad = new AnimalShelter(); <br>
// ahmad.enqueue('cat'); <br>
// ahmad.enqueue('cat');<br>

// ahmad.enqueue('cat');
// ahmad.enqueue('dog');<br>
// ahmad.enqueue('dog');<br>
// ahmad.enqueue('dog');<br>
// ahmad.enqueue('dog');<br>
// ahmad.enqueue('ahmad');<br>
// // console.log(ahmad.dequeue('cat'));<br>
// console.log(ahmad.dequeue('hh'));<br>
// console.log(ahmad.dequeue('cat'));<br>
// console.log(ahmad.dequeue('dog'));<br>
// // ahmad.enqueue('cat');<br>
// // ahmad.enqueue('ahmad');<br>
// console.log(ahmad.values[0]);<br>