const userLog = { user: "" };
let userScore = 0;
let computerScore = 0;
let tie = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const tieScore_span = document.getElementById("tie");
const gameScore_div = document.querySelector("#gamescore");
const result_div = document.querySelector(".result");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");
const play_div = document.getElementById("play");

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

function win(player, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = player + " Beats " + computer + " You Win! ";
}

function lose(player, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = computer + " Beats " + player + " You Lose! ";
}

function draw(player, computer) {
  tieScore_span++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = " Draw!";
}
function game(userpicked) {
  play_div.addEventListener("click", function game() {
    const computer = computerpicked();
    switch (userpicked + computer) {
      case "RockScissors":
      case "PaperRock":
      case "ScissorsPaper":
        win(userpicked, computer);

        break;
      case "RockPaper":
      case "PaperScissor":
      case "ScissorRock":
        lose(userpicked, computer);

        break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorScissor":
        draw();
        break;
    }
  });
}

game();

function main() {
  rock_btn.addEventListener("click", function () {
    console.log("Rock");
    game("Rock");
  });

  paper_btn.addEventListener("click", function () {
    console.log("Paper");
    game("Paper");
  });

  scissors_btn.addEventListener("click", function () {
    console.log("Scissor");
    game("Scissor");
  });
}

console.log("play");

main();
