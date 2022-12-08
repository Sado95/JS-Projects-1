let submitButton = document.querySelector('#submitButton');
let victoryPerson = document.querySelector('#victoryPerson');
let mainTitle = document.querySelector('#mainTitle');

let firstBalls = document.querySelectorAll('.first');
let secondBalls = document.querySelectorAll('.second');

let humanArrayResult = 0;
let computerArrayResult = 0;

humanArrayResult = Math.floor(Math.random() * (6 - 1) + 1);
computerArrayResult = Math.floor(Math.random() * (6 - 1) + 1);

// First block below is for first cube

let firstBall_1 = document.querySelector('#firstBall-1');
let firstBall_2 = document.querySelector('#firstBall-2');
let firstBall_3 = document.querySelector('#firstBall-3');

let firstBall_4 = document.querySelector('#firstBall-4');
let firstBall_5 = document.querySelector('#firstBall-5');
let firstBall_6 = document.querySelector('#firstBall-6');

let firstBall_7 = document.querySelector('#firstBall-7');
let firstBall_8 = document.querySelector('#firstBall-8');
let firstBall_9 = document.querySelector('#firstBall-9');

// Second block below is for second cube

let secondBall_1 = document.querySelector('#secondBall-1');
let secondBall_2 = document.querySelector('#secondBall-2');
let secondBall_3 = document.querySelector('#secondBall-3');

let secondBall_4 = document.querySelector('#secondBall-4');
let secondBall_5 = document.querySelector('#secondBall-5');
let secondBall_6 = document.querySelector('#secondBall-6');

let secondBall_7 = document.querySelector('#secondBall-7');
let secondBall_8 = document.querySelector('#secondBall-8');
let secondBall_9 = document.querySelector('#secondBall-9');

function showStyle(a, b) {
  switch (a) {
    case 1:
      firstBall_5.classList.add('ball-black');
      break;
    case 2:
      firstBall_1.classList.add('ball-black');
      firstBall_9.classList.add('ball-black');
      break;
    case 3:
      firstBall_1.classList.add('ball-black');
      firstBall_5.classList.add('ball-black');
      firstBall_9.classList.add('ball-black');
      break;
    case 4:
      firstBall_1.classList.add('ball-black');
      firstBall_3.classList.add('ball-black');
      firstBall_7.classList.add('ball-black');
      firstBall_9.classList.add('ball-black');
      break;
    case 5:
      firstBall_1.classList.add('ball-black');
      firstBall_3.classList.add('ball-black');
      firstBall_5.classList.add('ball-black');
      firstBall_7.classList.add('ball-black');
      firstBall_9.classList.add('ball-black');
      break;
    case 6:
      firstBall_1.classList.add('ball-black');
      firstBall_3.classList.add('ball-black');
      firstBall_4.classList.add('ball-black');
      firstBall_6.classList.add('ball-black');
      firstBall_7.classList.add('ball-black');
      firstBall_9.classList.add('ball-black');
      break;
    default:
  }
  switch (b) {
    case 1:
      secondBall_5.classList.add('ball-black');
      break;
    case 2:
      secondBall_1.classList.add('ball-black');
      secondBall_9.classList.add('ball-black');
      break;
    case 3:
      secondBall_1.classList.add('ball-black');
      secondBall_5.classList.add('ball-black');
      secondBall_9.classList.add('ball-black');
      break;
    case 4:
      secondBall_1.classList.add('ball-black');
      secondBall_3.classList.add('ball-black');
      secondBall_7.classList.add('ball-black');
      secondBall_9.classList.add('ball-black');
      break;
    case 5:
      secondBall_1.classList.add('ball-black');
      secondBall_3.classList.add('ball-black');
      secondBall_5.classList.add('ball-black');
      secondBall_7.classList.add('ball-black');
      secondBall_9.classList.add('ball-black');
      break;
    case 6:
      secondBall_1.classList.add('ball-black');
      secondBall_3.classList.add('ball-black');
      secondBall_4.classList.add('ball-black');
      secondBall_6.classList.add('ball-black');
      secondBall_7.classList.add('ball-black');
      secondBall_9.classList.add('ball-black');
      break;
    default:
  }
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  humanArrayResult = Math.floor(Math.random() * (6 - 1) + 1);
  computerArrayResult = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(humanArrayResult);
  console.log(computerArrayResult);
  for (let i = 0; i < firstBalls.length; i++) {
    firstBalls[i].classList.remove('ball-black');
  }
  for (let i = 0; i < secondBalls.length; i++) {
    secondBalls[i].classList.remove('ball-black');
  }
  if (humanArrayResult > computerArrayResult) {
    mainTitle.innerHTML = 'Player 1 wins';
    showStyle(humanArrayResult, computerArrayResult);
  }
  if (humanArrayResult < computerArrayResult) {
    mainTitle.innerHTML = 'Player 2 wins';
    showStyle(humanArrayResult, computerArrayResult);
  }
  if (humanArrayResult == computerArrayResult) {
    mainTitle.innerHTML = 'Tie';
    showStyle(humanArrayResult, computerArrayResult);
  }
});
