"use strict";

function binaryCount(number){
    return number.toString(2).match(/1/g).length
}

console.log(binaryCount(4));
console.log(binaryCount(15));
