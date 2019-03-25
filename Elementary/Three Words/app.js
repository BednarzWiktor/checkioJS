"use strict";

function threeWords(data) {
  let counter = 0;
  for (let i in data.split(' ')) {
    data.split(' ')[i].search(/[1-9]/g)===-1 ? counter++: counter=0;
    if (counter===3) {
      return true;
    }
  }
  return false;
}

console.log(threeWords("He is 123 man"));
console.log(threeWords("Hello World hello"));
console.log(threeWords("one two 3 four five six 7 eight 9 ten eleven 12"))
