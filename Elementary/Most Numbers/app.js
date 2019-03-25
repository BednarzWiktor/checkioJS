"use strict";

function mostNumbers(...numbers){
  let nums = [];
  for (let i=0; i<numbers.length; i++) nums.push(numbers[i]);
  nums = nums.sort((a, b) => a-b);
  return nums.length===0 ? 0: parseFloat((nums[nums.length-1]-nums[0]).toFixed(3));
}

console.log(mostNumbers());
console.log(mostNumbers(3.2, 1, 22, 321.122222));
