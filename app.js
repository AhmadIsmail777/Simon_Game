let gameSeq = []; //this will have the random color game has choosen
let userSeq = []; //this will have the color we have choosen

let btns = ["yellow", "red", "purple", "green"];

let started = false;  // at first the value of started is false
let level = 0; //and the level will be at 0

let btn = document.querySelector(".btn");
let h2 = document.querySelector("h2");

// this was the first step that if any key is pressed then the game will be started
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    levelUp();
  }
});

// this are the two function is used to flash the btn
function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 200);
}         

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}

// levelUp function 
//1--> sets the userSeq to empty
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  // to choose any random color
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
 //   console.log(gameSeq);
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randBtn);

  gameFlash(randBtn);
}
function checkAns(idx) {
  //   console.log("curr level:", level);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `<b>Game Over!</b> Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  //   console.log(this);
  let btn = this; // this is the btn which was pressed
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
