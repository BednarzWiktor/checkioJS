"use strict";

function friday(day) {
    day = day.split('.');
    const weekday = new Date(day[2], parseInt(day[1]-1), day[0]).getDay();
    let friday = 5;
    if (weekday<=friday) {
      return friday-weekday;
    } else {
      return weekday;
    }
}



console.log(friday('23.04.2018'));
