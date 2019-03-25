"use strict";

// Dictionary of all basic roman numbers

const trans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

// Main function

function reverseRoman(roman) {
    let result = 0;
    let memmory = 0; // Last encountered number
    for (let i in roman) {
      result+=trans[roman[i]];
      if (memmory<trans[roman[i]]) {
        result-=2*memmory;
      }
      memmory = trans[roman[i]];
    }
    return result;
}

reverseRoman('CDXCIX');
