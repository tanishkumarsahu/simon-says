let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = 0;
let btnsColor = ["red", "yellow", "green", "purple"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
  }
  started = true;

  levelUp();
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 150);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 150);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = level;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btnsColor[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);

  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highScore) {
      highScore = level;
    }
    h2.innerText = `Game Over! Your Score was ${level} and Hightest Score is ${highScore} Press any key to start`;

    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".line-two").style.backgroundColor = "red";
    document.querySelector(".line-one").style.backgroundColor = "RED";
    document.querySelector(".btn-container").style.backgroundColor = "red";

    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector(".line-one").style.backgroundColor = "white";
      document.querySelector(".line-two").style.backgroundColor = "white";
      document.querySelector(".btn-container").style.backgroundColor = "white";
    }, 200);

    reset();
  }
}

function buttonPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", buttonPress);
}

function reset() {
  stated = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
