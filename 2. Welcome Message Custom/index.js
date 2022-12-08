let userName = document.querySelector('#userName');
let inputField = document.querySelector('#inputField');
let submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let nameValue = String(inputField.value);
  userName.innerHTML = `${nameValue}`;
});
