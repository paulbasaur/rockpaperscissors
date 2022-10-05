const choices = ["rock", "paper", "scissors"];
let score = 0;

function getComputerChoice() {
  let randChoiceIndex = Math.floor(Math.random() * 3);
  return choices[randChoiceIndex];
}


function getPlayerChoice() {
  let playerChoice = prompt("Rock? Paper? Scissors?").toLowerCase();
  while (!(choices.includes(playerChoice))) {
    playerChoice = prompt("Please input rock, paper, or scissors.").toLowerCase();
  }
  return playerChoice;
}


function playRound() {
  const computerWinCombos = ["rockscissors", "scissorspaper", "paperrock"];
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();
  while (computerChoice === playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
  }
  if (computerWinCombos.includes(computerChoice + playerChoice)) {
    console.log("Computer wins round");
    return (-1);
  } else {
    console.log("Player wins round");
    return (1);
  }
}


function game() {
  for (let i = 0; i < 5; i++) {
    console.log(score);
    let round = playRound();
    score += round;
  }
  if (score > 0) {
    console.log("Player wins match!");
  } else {
    console.log("Computer wins match!")
  }
}

game();
