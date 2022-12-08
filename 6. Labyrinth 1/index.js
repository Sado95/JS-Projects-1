let totalNumber = document.querySelector('#totalNumber');
let clickButton = document.querySelector('#clickButton');
let box = document.querySelector('.box');

let timerId = 0;
let globalNumber = 0;

if (globalNumber < 5) {
}

clickButton.addEventListener('click', e => {
  e.preventDefault();
  globalNumber = 0;
  box.style.top = 150 + 'px';
  document.addEventListener(
    'keydown',
    (myFunction = e => {
      let currentKey = e.key;
      if (currentKey == 'ArrowUp') {
        let temp = box.offsetTop;
        temp = temp + 50;
        box.style.top = temp + 'px';
      }
    })
  );
  timerId = setInterval(function () {
    globalNumber = globalNumber + 1;
    totalNumber.innerHTML = globalNumber;
    if (globalNumber == 5) {
      clearInterval(timerId);
      document.removeEventListener('keydown', myFunction);
    }
  }, 1000);
});
