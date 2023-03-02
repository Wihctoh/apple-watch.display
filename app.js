const dynamicTime = document.querySelector(".time");
const dynamicDate = document.querySelector(".date");

function clock(dynamicTime_) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let clock1 = `${hours}:${minutes}:${seconds}`;

  dynamicTime_.innerHTML = clock1;
}

function date(dynamicDate_) {
  let now = new Date();
  let day = now.getDay();
  let month = now.getMonth();
  let year = now.getFullYear();
  let date1 = `${day}.${month}.${year}`;

  dynamicDate_.innerHTML = date1;
}

setInterval(date, 1000, dynamicDate);
setInterval(clock, 1000, dynamicTime);
