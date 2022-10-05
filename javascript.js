let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
  randChoiceIndex = Math.floor(Math.random() * 3);
  return choices[randChoiceIndex];
}

console.log(getComputerChoice());
