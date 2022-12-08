let mysteryWord = document.querySelector('#mysteryWord');
let inputField = document.querySelector('#inputField');
let submitButton = document.querySelector('#submitButton');
let successAlert = document.querySelector('#successAlert');

let mixedSlugs = ['lleho', 'ih', 'ogod', 'oumse', 'ppale'];

let normalSlugs = ['hello', 'hi', 'good', 'mouse', 'apple'];

let randomNumber = Math.floor(Math.random() * 5);
mysteryWord.innerHTML = mixedSlugs[randomNumber];

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let freshGuess = inputField.value;
  let normalWord = normalSlugs[randomNumber];
  let currentState = submitButton.textContent;
  if (currentState == 'Guess') {
    if (freshGuess == normalWord) {
      successAlert.innerHTML = `Congrats.`;
      submitButton.innerHTML = 'Reload';
    } else {
      successAlert.innerHTML = `Please, try again.`;
    }
  } else {
    window.location.reload();
  }
});
