console.log("Hello World")
const rock = "rock"
const paper = "paper"
const scissors = "scissors"

let humanScore = 0
let computerScore = 0

function getHumanChoice(){
    const humanChoice = prompt("Write 'rock', 'paper' or 'scissors'");
    const humanChoiceLowerCase = humanChoice.toLowerCase()
    return humanChoiceLowerCase
}

function getComputerChoice(){
    const computerChoice = Math.random()
    if(computerChoice < 0.33){
        return rock
    }
    if(computerChoice < 0.66 && computerChoice > 0.33){
        return paper
    }
    if(computerChoice > 0.66){
        return scissors
    }
}

function playRound(human, computer) {
    if(human === computer){
        console.log('Draw!')
    }
    if(
        (computer === rock && human === scissors) ||
        (computer === scissors && human === paper) ||
        (computer === paper && human === rock)
    ){
        computerScore = computerScore + 1
        console.log('Computer wins')
    }
    if(
        (human === rock && computer === scissors) ||
        (human === scissors && computer === paper) ||
        (human === paper && computer === rock)
    ){
        humanScore = humanScore + 1
        console.log('You, human, win!')
    }
}


  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log('Final score. human:', humanScore, '; computer:', computerScore)
