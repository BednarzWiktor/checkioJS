"use strict";

Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
}

function sortNumber(a,b) {
    return a - b;
}

function triangleAngles(a, b, c){
  let result = [];
  result.push(Math.round(Math.degrees(Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2))/(2*a*b)))));
  result.push(Math.round(Math.degrees(Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2))/(2*a*c)))));
  result.push(Math.round(Math.degrees(Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2))/(2*b*c)))));
  if (result.includes(NaN) || result.includes(0) || result.includes(null)) {
    return [0, 0, 0];
  } else {
    return result.sort(sortNumber);
  }
}

console.log(triangleAngles(4, 4, 4))
console.log(triangleAngles(3, 4, 5))
console.log(triangleAngles(2, 2, 5))
