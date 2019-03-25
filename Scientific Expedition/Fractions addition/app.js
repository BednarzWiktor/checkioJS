"use strict";

// Find lowest common denominators

const LCD = array => {
  let filtered = [];
  for (let i in array) {
    if (!filtered.includes(array[i])) {
      filtered.push(array[i]);
    }
  }
  filtered = filtered.sort((a, b) => a - b);
  let minNum = filtered[0];
  let test = minNum;
  filtered.shift();

  while (true) {
    let counter = 0;
    for (let i in filtered) {
      if (minNum%filtered[i]===0) {
         counter++
      }
    }
    if (counter===filtered.length) {
      return minNum;
      break;
    } else {
      minNum+=test;
    }
  }
}

// Multiply nominators to adjusted lCD

const normalize = (nom, denom, lcd) => {
  for (let i in nom) {
    nom[i]=nom[i]*(lcd/denom[i]);
  }
  return nom;
}

// Main function

function addFractions(fracts) {
    let nominators = [];
    let denominators = [];
    for (let set in fracts) {
      nominators.push(fracts[set][0]);
      denominators.push(fracts[set][1]);
    }
    let lcd = LCD(denominators);
    nominators = normalize(nominators, denominators, lcd);
    console.log(nominators)
    let sum = 0;
    for (let i in nominators) {
      sum+=nominators[i];
    }
    if (sum%lcd===0) {
      return sum/lcd
    } else if (Math.floor(sum/lcd)===0) {
      return `${sum%lcd}/${lcd}`
    } else {
      return `${Math.floor(sum/lcd)} and ${sum%lcd}/${lcd}`
    }
}

console.log(addFractions([[2, 3], [2, 3], [2, 6]]));
