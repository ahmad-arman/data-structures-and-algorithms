
'use strict';


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

  findMaximumValue(){
    let maxValue =0 ;

    let traverse = (node) => {
      if(this.root){
        if(this.root.value > maxValue ){
          maxValue= this.root.value;
        }}

      if(node.left){
        if(node.left.value > maxValue){
          maxValue= node.left.value;
        }
        traverse(node.left);
      }

      if(node.right){
        if(node.right.value > maxValue){
          maxValue= node.right.value;
        }
        traverse(node.right);
      }

    };
    traverse(this.root);
    return maxValue;

  }


 

}




module.exports = BinaryTree ;


