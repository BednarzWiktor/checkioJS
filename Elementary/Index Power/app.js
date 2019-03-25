"use strict";

function indexPower(array, n){
  return n>=array.length ? -1: Math.pow(array[n], n);
}
