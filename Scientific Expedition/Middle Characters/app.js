"use strict";

function middle(text) {
  let l = text.length;
    if (l%2===0) {
      return text[(l/2)-1]+text[l/2]
    } else {
      return text[parseInt((l/2)-0.5)]
    }
}

console.log(middle('example'));
console.log(middle('exammple'));
console.log(middle('t'));
