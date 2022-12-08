let tipAmount = document.querySelector('#tipAmount');
let totalAmount = document.querySelector('#totalAmount');

let inputField = document.querySelector('#inputField');
let submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let fullValue = Number(inputField.value);
  let tipValue = (fullValue * 0.15).toFixed(2);
  tipAmount.innerHTML = `$${tipValue}`;
  totalAmount.innerHTML = `$${fullValue}`;
});
