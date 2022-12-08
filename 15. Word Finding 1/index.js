let nameArray = [
  { normalName: 'apple', randomName: '' },
  { normalName: 'car', randomName: '' },
  { normalName: 'mouse', randomName: '' },
  { normalName: 'glass', randomName: '' },
  { normalName: 'moon', randomName: '' },
];

let duration = 0;

let nameArrayCloneOld = ['apple', 'car', 'mouse', 'glass', 'moon'];
let nameArrayClone = ['apple', 'car', 'mouse', 'glass', 'moon'];

let submitButton = document.querySelector('#submitButton');
let title = document.querySelector('h1');
let statusSpan = document.querySelector('#status');
let tableArea = document.querySelector('#tableArea');
let boxes = document.querySelectorAll('.box');

let time = {};

// Function designed to populate name array with new randomName value
// Every time programs starts, it invokes itself

function populateRandomNames() {
  for (let i = 0; i < nameArray.length; i++) {
    let nameParam = nameArray[i]['normalName'];
    let a1 = randomizeWord(nameParam);
    nameArray[i]['randomName'] = a1;
  }

  return nameArray;
}

// Function dedicated for chosing random main word to compare player choice

function randomMainArrayChoice() {
  let randomMainNumber = Math.floor(
    Math.random() * Math.floor(nameArrayClone.length)
  );
  let activeMainWord = nameArrayClone[randomMainNumber];
  title.word = activeMainWord;
  title.randomNumber = randomMainNumber;
  title.innerText = `Select this Word: ${activeMainWord}`;
}

// Function designed to fill depleted array chosen for displaying main word

function fillArrayClone() {
  for (let i = 0; i < nameArrayCloneOld.length; i++) {
    nameArrayClone.push(nameArrayCloneOld[i]);
  }
  return nameArrayClone;
}

// Function designed to fill target array with incremented numbers

function populateAllPositions(lengthNumber, array) {
  for (let i = 0; i <= lengthNumber; i++) {
    array.push(i);
  }
  return array;
}

// Function designed to populate normal array with incrementing numbers
// After that chose unique values which will be next scrmbled word
// At the end returns newly scrambled word

function randomizeWord(word) {
  let tempWord = word.split('');
  let tempLength = tempWord.length - 1;

  let allPositions = []; // Normal indexes with values
  let positionValues = []; // Value of position, not index
  let newWordCombination = [];

  populateAllPositions(tempLength, allPositions);

  for (let i = 0; i <= tempLength; i++) {
    let r1 = Math.floor(Math.random() * allPositions.length);
    positionValues.push(allPositions[r1]);

    allPositions.splice(r1, 1);
  }

  for (let j = 0; j < positionValues.length; j++) {
    let tempPosition = positionValues[j];
    newWordCombination.push(tempWord[tempPosition]);
  }

  return newWordCombination.join('');
}

// Event listener for button to start game

submitButton.addEventListener('click', startGame);

// *********************************
// START OF GAME !!!
// *********************************

function startGame() {
  submitButton.style.visibility = 'hidden';
  tableArea.classList.remove('hidden');
  time.duration = 0;
  time.old = new Date().getTime();
  console.log(time.old);
  populateRandomNames();
  randomMainArrayChoice();
  removeBoxHidden();
  dedicateEventListeners();
}

// Function for designing new array after round is finished

function updateArray() {
  let tempNameArrayLength = nameArray.length - 1;
  let arr1 = [];
  let arr2 = [];
  populateAllPositions(tempNameArrayLength, arr1);

  for (let i = 0; i <= tempNameArrayLength; i++) {
    let r1 = Math.floor(Math.random() * arr1.length);
    arr2.push(arr1[r1]);

    arr1.splice(r1, 1);
  }

  console.log(arr2);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', e => {
      boxes[i].innerHTML = nameArray[arr2[i]]['randomName'];
      boxes[i].randomName = nameArray[arr2[i]]['randomName'];
      boxes[i].normalName = nameArray[arr2[i]]['normalName'];
    });
  }
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseout', e => {
      boxes[i].innerHTML = 'Select';
    });
  }
}

function removeBoxHidden() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.visibility = 'visible';
  }
}

// Function for adding event listener to every box and game logic

function dedicateEventListeners() {
  updateArray();
  boxes.numClicks = 0;
  let count = boxes.numClicks;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', e => {
      let currentTitleText = title.word;

      if (boxes[i].normalName == currentTitleText) {
        nameArrayClone.splice(title.randomNumber, 1);
        boxes[i].style.visibility = 'hidden';
        randomMainArrayChoice();
        count++;
      }

      if (boxes[i].normalName != currentTitleText) {
        count++;
      }

      if (nameArrayClone.length == 0) {
        submitButton.style.visibility = 'visible';
        tableArea.classList.add('hidden');
        nameArrayClone = fillArrayClone();
        time.end = new Date().getTime();
        let duration = (time.end - time.old) / 1000;
        time.duration = duration;
        console.log(time.duration);
        title.innerText = `Game Over! Tries: ${count} Time: ${time.duration}`;
      }
    });
  }
}
