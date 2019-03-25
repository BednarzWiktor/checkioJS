"use strict";

const VOWELS = "aeiouy"

function translate(phrase){
    let result = '';
    for (let i=0; i<phrase.length; i++) {
      result=result+phrase[i];
      if (VOWELS.includes(phrase[i])) {
        i+=2;
      } else if (phrase[i]!==' ') {
        i+=1;
      }
    }
    return result;
}

console.log(translate("hieeelalaooo"));
console.log(translate("sooooso aaaaaaaaa"));
console.log(translate("hoooowe yyyooouuu duoooiiine"));
