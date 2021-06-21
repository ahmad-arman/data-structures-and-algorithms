
function meargesort(arr){
  let n = arr.length;
  if (n>1){

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    console.log(left);
    let right = arr.slice(mid);

    meargesort(left);
   
    meargesort(right);
    mearg(left,right,arr);

  }else {
    return 'empty array';
  }

  return arr;


}

function mearg(left, right, arr){
  let x =0;
  let y =0 ;
  let k= 0;

  while(x<left.length && y < right.length){
    if (left[x] <= right[y]) {
      arr[k] = left[x];
      x++;
    } else {
      arr[k] = right[y];
      y++;
    }
    k++;
  }


  
  while (x < left.length) {
    arr[k] = left[x];
    x++;
    k++;
  }

  

  while (y < right.length) {
    arr[k] = right[y];
    y++;
    k++;
  }





}
module.exports =meargesort;
