let boxes = document.querySelectorAll('.box');

let duzina = boxes.length;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', e => {
    boxes[i].classList.remove('letter');
  });
}

function provjeraKlasa() {
  let provjera = 0;
  for (let j = 0; j < boxes.length; j++) {
    if (boxes[j].classList.contains('letter')) {
      provjera++;
    } else {
      provjera--;
    }
    return provjera;
  }
}
