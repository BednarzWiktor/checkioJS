"use strict";

const files = 'abcdefgh';

// Covered fields
const covered = data => {
  let covered = [];
  data.forEach(pos => {
    covered.push(files[files.indexOf(pos[0])-1]+`${(parseInt(pos[1])+1)}`);
    covered.push(files[files.indexOf(pos[0])+1]+`${(parseInt(pos[1])+1)}`);
  });
  console.log(covered);
  return covered;
}

// Main function
function safePawns(data) {
  let result = 0;
  data.forEach(pos => {
    if(covered(data).includes(pos)) {
      result++;
    }
  })
  return result;
}

console.log(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]));
