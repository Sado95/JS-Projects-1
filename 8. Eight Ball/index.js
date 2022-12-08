let textField = document.querySelector('#questionString');
let submitButton = document.querySelector('#submitButton');
let mainBox = document.querySelector('main');
let question = '';
let randomWordArray = ['I dont know', 'Who knows', 'Mistery', 'Maybe'];
let randNumber = 0;
let answer = '';

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let fullLength = randomWordArray.length;
  function getNumValue(a) {
    return Math.floor(Math.random() * a);
  }
  randNumber = getNumValue(fullLength);
  answer = randomWordArray[randNumber];
  question = textField.value;
  let mainAnswer = document.createElement('h3');
  mainAnswer.textContent = `${question} : ${answer}`;
  mainBox.appendChild(mainAnswer);
});
