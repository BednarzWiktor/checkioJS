"use strict";

function rotate(matrix) {
  let output = [];
  for (let i in matrix) {
    let row = [];
    for (let j in matrix) {
      row.push(matrix[j][i]);
    }
    output.push(row);
  }
  return output
}

function sequence(matrix) {
  const matrixRot = rotate(matrix);
  return 0
}

console.log(rotate([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));
