function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let num = getRandomInt(3);
  let option;

  switch (num) {
    case 0:
      option = "rock";
      break;
    case 1:
      option = "paper";
      break;
    case 2:
      option = "scissors";
      break;
  }
  return option;
}

function getHumanChoice() {
  let message = "Write rock, paper or scissors";
  let choice = prompt(message);
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {

    let roundMessageWin = "You Win";
    let roundMessageLose = "You lose";
    let roundMessageTie = "It's a tie";

    if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      humanScore++;
      alert(roundMessageWin);
    } else if (humanChoice == computerChoice) {
      alert(roundMessageTie);
    } else {
      computerScore++;
      alert(roundMessageLose);
    }
  }
  for (let i = 0; i < 5; i++) {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    playRound(human, computer)
  }
  console.log("Human " + humanScore);
  console.log("Computer " + computerScore);
}


playGame();