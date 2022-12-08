let buttons = document.querySelectorAll('button');
let computerSelection = document.querySelector('#computerSelection');

let heads = document.querySelector('#heads');
let tails = document.querySelector('#tails');

let playerVictoryCondition = document.querySelector('#playerVictoryCondition');

let playerCount = document.querySelector('#playerCount');
let computerCount = document.querySelector('#computerCount');

let computerArray = ['Heads', 'Tails'];
let tempComputerChoice = Math.floor(Math.random() * 2);
let computerChoice = computerArray[tempComputerChoice];

let tempGeneralChoice = Math.floor(Math.random() * 2);
let generalChoice = computerArray[tempGeneralChoice];

let playerCounter = 0;
let computerCounter = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', e => {
    e.preventDefault();
    let computerArray = ['Heads', 'Tails'];
    let tempComputerChoice = Math.floor(Math.random() * 2);
    let computerChoice = computerArray[tempComputerChoice];

    let tempGeneralChoice = Math.floor(Math.random() * 2);
    let generalChoice = computerArray[tempGeneralChoice];

    let playerChoice = e.target.textContent;
    if (playerChoice == generalChoice && computerChoice != generalChoice) {
      playerCounter++;
      computerSelection.innerHTML = computerChoice;
      playerVictoryCondition.innerHTML = 'Wins';
      playerCount.innerHTML = playerCounter;
    }
    if (playerChoice == generalChoice && computerChoice == generalChoice) {
      computerSelection.innerHTML = computerChoice;
      playerVictoryCondition.innerHTML = 'Tie';
    }
    if (playerChoice != generalChoice && computerChoice == generalChoice) {
      computerCounter++;
      computerSelection.innerHTML = computerChoice;
      playerVictoryCondition.innerHTML = 'Loses';
      computerCount.innerHTML = computerCounter;
    }
    if (playerChoice != generalChoice && computerChoice != generalChoice) {
      computerSelection.innerHTML = computerChoice;
      playerVictoryCondition.innerHTML = 'Both wrong';
    }
  });
}
