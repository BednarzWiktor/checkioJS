"use strict";

function friendlyNumber(number, options){
    if (!options) {
        options = {};
    }
    if (!options.base) {
        options.base = 1000;
    }
    if (!options.decimals) {
        options.decimals = 0;
    }
    if (!options.suffix) {
        options.suffix = '';
    }
    if (!options.powers) {
        options.powers = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    }

    let count=0;
    while (Math.abs(number)>=options.base && count<options.powers.length-1) {
      number=number/options.base;
      count++;
    }

    if (options.decimals===0) {
      if (number>0) {
        number=Math.floor(number);
      } else {
        number=Math.ceil(number);
      }
    } else {
      number=number.toFixed(options.decimals);
    }

    return `${number}${options.powers[count]}${options.suffix}`;
}

friendlyNumber(102)
friendlyNumber(10240)
friendlyNumber(12341234, {decimals: 1})
friendlyNumber(12000000, {decimals: 3})
friendlyNumber(12461, {decimals: 1})
friendlyNumber(1024000000, {base: 1024, suffix: 'iB'})
