let messageContainer = document.querySelector('#messageContainer');
let currentMessage = document.querySelector('#currentMessage');
let submitButton = document.querySelector('#submitButton');

getTime = () => {
  let d = new Date();
  let tempValue = d.getHours();
  return tempValue;
};

let currentHour = getTime();
if (currentHour >= 0 && currentHour < 6) {
  currentMessage.innerHTML = 'Still sleeping';
  messageContainer.style.backgroundColor = 'black';
}
if (currentHour >= 6 && currentHour < 12) {
  currentMessage.innerHTML = 'Good Morning';
  messageContainer.style.backgroundColor = 'blue';
}
if (currentHour >= 12 && currentHour < 18) {
  currentMessage.innerHTML = 'Good Afternoon';
  messageContainer.style.backgroundColor = 'brown';
}
if (currentHour >= 18 && currentHour <= 23) {
  currentMessage.innerHTML = 'Good Evening';
  messageContainer.style.backgroundColor = 'green';
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  return currentMessage;
});
