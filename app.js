// const dynamicTime = document.querySelector(".time");
// const dynamicDate = document.querySelector(".date");

// function clock(dynamicTime_) {
//   let now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let clock1 = `${hours}:${minutes}:${seconds}`;

//   dynamicTime_.innerHTML = clock1;
// }

// function date(dynamicDate_) {
//   let now = new Date().toLocaleDateString();

//   dynamicDate_.innerHTML = now;
// }

// setInterval(date, 60000, dynamicDate);
// setInterval(clock, 1000, dynamicTime);

class AppleDisplay {
  constructor() {
    setInterval(this.date, 1000, this.dynamicDate);
    setInterval(this.clock, 1000, this.dynamicTime);
  }

  clock() {
    const dynamicTime = document.querySelector(".time");

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds();
    let clock1 = `${hours}:${minutes}:${seconds}`;

    dynamicTime.innerHTML = clock1;
  }

  date() {
    const dynamicDate = document.querySelector(".date");

    let now = new Date().toLocaleDateString();

    dynamicDate.innerHTML = now;
  }
}

const appleDisplay = new AppleDisplay();
