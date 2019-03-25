"use strict";

function flatList(array){
  let r=array.join().split(',');
  for (let i in r) {
    if (Number.isInteger(parseInt(r[i]))) {
      r[i]=parseInt(r[i]);
    }
  }
  return r.filter(w => Number.isInteger(w));
}

console.log(flatList([]));
console.log(flatList([-1, [1, [-2], 1], -1]));
