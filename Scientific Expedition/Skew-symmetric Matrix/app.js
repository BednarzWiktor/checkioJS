"use strict";

const x = [
            [0, 4, 2],
            [-4, 0, 4],
            [-2, 4, 0]
          ];

function symmetric(matrix) {
    for (let i in matrix) {
      for (let j in matrix) {
        if (matrix[i][j] !== -matrix[j][i]) {
          return false;
        }
      }
    }
    return true;
}

console.log(symmetric(x));
