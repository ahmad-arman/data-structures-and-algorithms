'use strict';
const Node =require('./node.js');

class BinaryTree {
  constructor(root =null){
    this.root =root ;
  }

  preOrder(){
    let binaryArrayResult =[];

    let traverse = (node) => {
      binaryArrayResult.push(node.value);

      if(node.left) traverse(node.left);

      if(node.right) traverse(node.right);

    };
    traverse(this.root);
    return binaryArrayResult;

  }

  inOrder() {
    let binaryArrayResult = [];

    let traverse = (node) => {
      // read left
      if(node.left) traverse(node.left);
      // read the root
      binaryArrayResult.push(node.value);
      // read right
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return binaryArrayResult;
  }

  // left - right - root
  postOrder() {
    let binaryArrayResult = [];

    let traverse = (node) => {
      // read left
      if(node.left) traverse(node.left);
      // read right
      if(node.right) traverse(node.right);
      // read the root
      binaryArrayResult.push(node.value);
    };
    traverse(this.root);
    return binaryArrayResult;
  }
}


class BinarySearchTree {

  constructor(root=null){
    this.root =root;
  }

  add(value){

    let nody =new Node(value);
    if(this.root=== null ) {
      this.root = nody;
    }
    let current = this.root;
    while(current){
      if(value === current.value) return undefined;

      if(value < current.value){
        if(current.left === null){
          current.left = nody;
          // return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = nody;
          // return this;
        }
        current = current.right;
      }
    }


  }




  contains(value){
    if (value === this.root.value){
      return true;

    } else {
      let check = ((value, current)=>{

        if(value > current.value){
          if(current.right === null){
            return false;
          } else if (value === current.right.value){
            return true;
          }
          else { return check(value,current.right);}
        }
        else {
          if (current.left === null){
            return false;
          } else if(current.left.value === value){
            return true;
          }
          else {
            return check(value, current.left);
          }
        }

      });

      return check(value, this.root);
    }
  }

}

module.exports = {BinaryTree ,BinarySearchTree} ;
