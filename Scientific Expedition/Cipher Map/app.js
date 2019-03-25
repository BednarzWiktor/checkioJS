"use strict";

// Rotating the map by 90deg clockwise
const rotRight = grille => {
  let output = [];
  for (let i=grille.length-1; i>=0; i--) {
    let row = [];
    for (let j=0; j<grille[0].length; j++) {
      row.unshift(grille[j][i]);
    }
    output.push(row);
  }
  return output.reverse();
}

// Using a map
const decipher = (grille, password) => {
  let output = '';
  for (let i=0; i<grille.length; i++) {
    for (let j=0; j<grille[0].length; j++) {
      if (grille[i][j]==='X') {
        output+=password[i][j];
      }
    }
  }
  return output;
}

// Main function
function recallPassword(grille, password){
    let result = '';
    result+=decipher(grille, password)
          +decipher(rotRight(grille), password)
          +decipher(rotRight(rotRight(grille)), password)
          +decipher(rotRight(rotRight(rotRight(grille))), password);
    return result;
}

console.log(recallPassword(['X...',
                           '..X.',
                           'X..X',
                           '....'],
                          ['itdf',
                           'gdce',
                           'aton',
                           'qrdi']))
