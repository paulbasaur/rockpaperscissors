const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

let playerTotalScore = document.querySelector('#player-score');
let computerTotalScore = document.querySelector('#computer-score');

let playerChoiceDisplay = document.querySelector('#player-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');

let resultMessage = document.querySelector('#message');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let round = playRound(button.id);
  });
});


function getComputerChoice() {
  let randChoiceIndex = Math.floor(Math.random() * 3);
  return choices[randChoiceIndex];
}

function playRound(playerClick) {
  const computerWinCombos = ["rockscissors", "scissorspaper", "paperrock"];
  let playerChoice = playerClick;
  let computerChoice = getComputerChoice();
  updateChoiceDisplay(playerChoice, computerChoice);

  while (computerChoice === playerChoice) {
    updateResultMessage("Tie", 0);
    return 0;
  }

  if (computerWinCombos.includes(computerChoice + playerChoice)) {
    computerScore +=1;
    computerTotalScore.textContent = computerScore;
    updateResultMessage("Computer", computerScore);
    return (computerScore);
  } else {
    playerScore += 1;
    playerTotalScore.textContent = playerScore;
    updateResultMessage("Player", playerScore);
    return (playerScore);
  }
}

function updateChoiceDisplay(player, computer) {
  playerChoiceDisplay.textContent = "Player chose: " + player;
  computerChoiceDisplay.textContent = "Computer chose: " + computer;
}

function updateResultMessage(name, score) {
  if (name == "Tie"){
    resultMessage.textContent = "Tie.  Select again.";
    return;
  }

  if (score < 7) {
    resultMessage.textContent = name + " wins round!";
  } else {
    resultMessage.textContent = name + " wins match!";
    setTimeout(restartGame, 1);
  }
  return
}

function restartGame() {
  const promptSelection = confirm("Play again?");
  if (promptSelection) {
    location.reload();
  } else {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}
