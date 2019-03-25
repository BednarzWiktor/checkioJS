"use strict";

function digitStack(commands){
  let result=0;
  let stack=[];
  for (let i in commands) {
    if (commands[i].includes('PUSH')) {
      stack.push(parseInt(commands[i].slice(5)));
    } else if (commands[i].includes('POP') && stack.length>0) {
      result+=stack[stack.length-1];
      stack.pop();
    } else if (stack.length>0) {
      result+=stack[stack.length-1];
    }
  }
  return result;
}

console.log(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
                      "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]));
