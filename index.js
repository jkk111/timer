var MILLIS_IN_HOUR = 60 * 60 * 1000;
var MILLIS_IN_MINUTE = 60 * 1000;
module.exports = function(hour, minute, both, cb) {
  if(typeof both === "function") {
    cb = both;
    both = false;
  }
  var time = new Date();
  var hours = time.getHours();
  hours = getHoursToRunTime(hours, hour, both);
  var minutes = time.getMinutes();
  minutes = getMinutesToRunTime(minutes, minute);
  var delta = (hours * MILLIS_IN_HOUR) + (minutes * MILLIS_IN_MINUTE) - (time.getSeconds() * 1000);
  delta = Math.max(delta, 0);
  setTimeout(cb, delta);
}

function getHoursToRunTime(curHour, destHour, both) {
  var numHours = both ? 12 : 24;
  if(curHour > destHour)
    curHour = (numHours - hour) + destHour;
  else
    curHour = destHour - curHour;
  return curHour;
}

function getMinutesToRunTime(curMinute, destMinute) {
  if(curMinute > destMinute)
    curMinute = (60 - curMinute) + destMinute;
  else
    curMinute = destMinute - curMinute;
  return curMinute;
}