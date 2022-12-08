let inputField0 = document.querySelector('#inputField0');
let inputField1 = document.querySelector('#inputField1');
let inputField2 = document.querySelector('#inputField2');
let inputField3 = document.querySelector('#inputField3');
let inputField4 = document.querySelector('#inputField4');
let inputField5 = document.querySelector('#inputField5');

let numOfTries = document.querySelector('#numOfTries');

let submitButton = document.querySelector('#submitButton');

let randomArray = [];

for (let i = 0; i < 6; i++) {
  randomArray.push(Math.floor(Math.random() * 5));
}

let num0 = 0;
let num1 = 0;

let num2 = 0;
let num3 = 0;

let num4 = 0;
let num5 = 0;

let guessNum = 0;

numOfTries.innerHTML = `Guesses ${guessNum}`;

let incrementButtons = document.querySelectorAll('.spinnerPlus');
let decrementButtons = document.querySelectorAll('.spinnerMinus');
let containers = document.querySelectorAll('.combinationContainer');

for (let i = 0; i < decrementButtons.length; i++) {
  decrementButtons[i].addEventListener('click', e => {
    e.preventDefault();
    let incValue = i;
    for (let j = 0; j < containers.length; j++) {
      if (j == incValue) {
        switch (incValue) {
          case 0:
            num0 = num0 - 1;
            inputField0.value = num0;
            break;
          case 1:
            num1 = num1 - 1;
            inputField1.value = num1;
            break;
          case 2:
            num2 = num2 - 1;
            inputField2.value = num2;
            break;
          case 3:
            num3 = num3 - 1;
            inputField3.value = num3;
            break;
          case 4:
            num4 = num4 - 1;
            inputField4.value = num4;
            break;
          case 5:
            num5 = num5 - 1;
            inputField5.value = num5;
            break;
        }
      }
    }
  });
}

for (let i = 0; i < incrementButtons.length; i++) {
  incrementButtons[i].addEventListener('click', e => {
    e.preventDefault();
    let incValue = i;
    for (let j = 0; j < containers.length; j++) {
      if (j == incValue) {
        switch (incValue) {
          case 0:
            num0 = num0 + 1;
            inputField0.value = num0;
            break;
          case 1:
            num1 = num1 + 1;
            inputField1.value = num1;
            break;
          case 2:
            num2 = num2 + 1;
            inputField2.value = num2;
            break;
          case 3:
            num3 = num3 + 1;
            inputField3.value = num3;
            break;
          case 4:
            num4 = num4 + 1;
            inputField4.value = num4;
            break;
          case 5:
            num5 = num5 + 1;
            inputField5.value = num5;
            break;
        }
      }
    }
  });
}

colorDecider = (num, ele, inputField) => {
  if (num < ele) {
    inputField.classList.add('blue');
    inputField.classList.remove('red');
    inputField.classList.remove('green');
    return false;
  }
  if (num > ele) {
    inputField.classList.add('red');
    inputField.classList.remove('green');
    inputField.classList.remove('blue');
    return false;
  }
  if (num == ele) {
    inputField.classList.add('green');
    inputField.classList.remove('blue');
    inputField.classList.remove('red');
    return true;
  }
};

submitButton.addEventListener('click', e => {
  e.preventDefault();
  console.log(randomArray);

  let box1 = colorDecider(num0, randomArray[0], inputField0);
  let box2 = colorDecider(num1, randomArray[1], inputField1);
  let box3 = colorDecider(num2, randomArray[2], inputField2);
  let box4 = colorDecider(num3, randomArray[3], inputField3);
  let box5 = colorDecider(num4, randomArray[4], inputField4);
  let box6 = colorDecider(num5, randomArray[5], inputField5);

  if (box1 && box2 && box3 && box4 && box5 && box6) {
    numOfTries.innerHTML = '';
    numOfTries.innerHTML = `You have got the combo after ${guessNum} tries. Congrats!`;
  }
  if (!box1 || !box2 || !box3 || !box4 || !box5 || !box6) {
    guessNum += 1;
    numOfTries.innerHTML = `Guesses ${guessNum}`;
  }
});
