"use strict";

// Convert to binary, then to morse notation
const normalize = data => {
  let input = data.split(':');
  let task = [];
  for (let i in input) {
    let set = [];
    for (let j in input[i]) {
      let current = parseInt(input[i][j]).toString(2);
      current=current.replace(/[0]/g, ".");
      current=current.replace(/[1]/g, "-");
      if (current.length<4) {
        current='.'.repeat(4-current.length)+current;
      }
      set.push(current);
      console.log(current)
    }
    if (set.length<2) {
      set.unshift('....');
    }
    task.push(set);
  }
  task[0][0]=task[0][0].slice(2);
  task[1][0]=task[1][0].slice(1);
  task[2][0]=task[2][0].slice(1);
  return task
}

// Main function
function morseClock(data) {
  let output=normalize(data);
  for (let i in output) {
    output[i]=output[i].join(' ');
  }
  return output.join(' : ');
}

//console.log(morseClock('00:00:00'))
console.log(morseClock("10:37:49"));
//morseClock("21:34:56");
//morseClock("23:59:59");
