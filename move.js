const userLog = { user: "" };
let userScore = 0;
let computerScore = 0;
let tie = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const tieScore_span = document.getElementById("tie");
const result_div = document.querySelector(".result");

function buttonClicked() {
  let user = document.querySelector("#userName").value;
  userLog.user = user;
  document.querySelector(".LoginInterface").style.display = "None";
  document.querySelector(".gameInterface").style.display = "flex";
  document.querySelector("#userinput").innerHTML = userLog.user;
  return;
}

function computerpicked() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randompick = Math.floor(Math.random() * 3);
  return choices[randompick];
}

let playerPicked = "";
let computerChoice = "";

function choose(player) {
  playerPicked = player;
}

function play() {
  computerChoice = computerpicked();
  let result_choice = "";
  if (playerPicked === computerChoice) {
    result_choice = draw(playerPicked);
    return;
  }
  if (
    (playerPicked === "Rock" && computerChoice === "Scissors") ||
    (playerPicked === "Paper" && computerChoice === "Rock") ||
    (playerPicked === "Scissors" && computerChoice === "Paper")
  ) {
    result_choice = win(playerPicked);
  } else {
    result_choice = lose(playerPicked);
  }
}

function win(player) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = player + " Beats " + computerChoice + " You Win! ";
}

function lose(player) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = computerChoice + " Beats " + player + " You Lose! ";
}

function draw(player) {
  tie++;
  tieScore_span.innerHTML = tie;
  result_div.innerHTML = " Draw!";
}
