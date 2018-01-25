"use strict";

const MS_IN_SEC = 1000;
const MS_IN_MINUTE = MS_IN_SEC * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 60;

function createCountdown(elementID, startTime) {
     var clock = document.createElement('div');
     document.getElementById(elementID).appendChild(clock);
     function setTime() {
          var time = startTime - Date.now();
          var days = Math.floor(time / MS_IN_DAY);
          time -= days*MS_IN_DAY;
          var hours = Math.floor(time / MS_IN_HOUR);
          time -= hours*MS_IN_HOUR;
          var minutes = Math.floor(time / MS_IN_MINUTE);
          time -= minutes*MS_IN_MINUTE;
          var seconds = Math.floor(time / MS_IN_SEC);
          var message = "In "+days+" days, "+hours+" hours, "+minutes+" minutes, "+seconds+" seconds.";
          clock.innerHTML = message;
     }
     setInterval(setTime,1000);
}

createCountdown('all-university',Date.parse("2018-4-7"));
createCountdown('engineering',Date.parse("2018-4-6"));
