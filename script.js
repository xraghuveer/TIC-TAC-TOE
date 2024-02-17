console.log("Welcome to Tic Tac Toe");

let turn = "X";
let gameover = false;

// Function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      gameover = true;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
    }
  });
};

// Function to handle clicks on boxes
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', (e) => {
    if (boxtext.innerText === '' && !gameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameover) {
        document.querySelector(".info").innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Reset button event listener
reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText = "";
  });
  gameover = false;
  document.querySelector(".info").innerText =
    "Turn for " + turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
