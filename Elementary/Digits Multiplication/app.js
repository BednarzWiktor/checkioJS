"use strict";

function digitsMultip(data) {
    data=data.toString();
    let result=1;
    for (let i in data) {
        if (data[i]!=="0") {
            result=result*parseInt(data[i]);
        }
    }
    return result
}

console.log(digitsMultip(123405))
