'use strict';



// class Node {
//   constructor(value =null){
//     this.value =value;

//   }
// }

// class NewTree {
//   constructor(){
//     this.root =null;
//     this.child=[];
//   }

//   add(val){
//     let node = new Node(val);
//     return this.root ? this.root =node : this.child.push(node);
//   }
// }

// function fizzBuzzTree(tree){

//   let array = tree.child;
//   for(let i=0; i< tree.child.length ;i++){

//     if(array[i].value%5 ===0 && array[i].value%3 ===0){
//       array[i].value='FizzBuzz';
//     }
//     if(array[i].value%5 ===0){
//       // newArray.push(`${array[i].value} Buzz`)
//       array[i].value='Buzz';
//     }
//     if(array[i].value%3===0){
//       array[i].value='Fizz';
//       // newArray.push(`${array[i].value} `)
//     }

//     array[i].value=array[i].value.toString();
//   }
//   // console.log(newArray)
//   return tree;


// }

// // let myTree = new NewTree();

// // myTree.add(5);
// // myTree.add(15);
// // myTree.add(3);
// // myTree.add(10);
// // myTree.add(30);
// // myTree.add(50);
// // myTree.add(90);
// // myTree.add(120);
// // myTree.add(121);

// // console.log(myTree);



// // fizzBuzzTree(myTree);
// // console.log(fizzBuzzTree(myTree));

// module.exports ={Node,NewTree,fizzBuzzTree};


class Node {
  constructor(value){
    this.value =value;
    this.child=[];
  }
}

class Tree {
  constructor(){
    this.root =null;
  }
}

function fizzBuzzTree(tree){
  let ahmad =[];
  const myTree = tree;
  let traverse = (node) =>{

    if (!tree.root) throw `empty tree`;
    else if(node.value%5 ===0 && node.value%3 ===0){
      node.value='FizzBuzz';
    }
    else if(node.value%5 ===0){

      node.value='Buzz';
    }
    else if(node.value%3===0){
      node.value='Fizz';
    }
    else{
      node.value= node.value.toString() ;

    }

    for (let i = 0; i < node.child.length; i++) {
      traverse(node.child[i]);
    }

  };
  traverse(myTree.root);
  console.log(ahmad);
  return myTree;
}

module.exports ={Node,Tree,fizzBuzzTree};



