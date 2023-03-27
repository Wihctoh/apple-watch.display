// const dynamicTime = document.querySelector(".time");
// const dynamicDate = document.querySelector(".date");

// function clock() {
//   let now = new Date();

//   dynamicTime.innerHTML = now.toLocaleTimeString("BY");
//   dynamicDate.innerHTML = now.toLocaleDateString("BY");
// }

// setInterval(clock, 1000);

class AppleDisplay {
  constructor() {
    setInterval(this.clock, 1000);
  }

  clock() {
    const dynamicTime = document.querySelector(".time");
    const dynamicDate = document.querySelector(".date");

    let now = new Date();

    dynamicTime.innerHTML = now.toLocaleTimeString("BY");
    dynamicDate.innerHTML = now.toLocaleDateString("BY");
  }
}

const appleDisplay = new AppleDisplay();
