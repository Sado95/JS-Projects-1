let box1 = document.querySelector('.box-red');
let box2 = document.querySelector('.box-blue');
let box3 = document.querySelector('.blocker');
let output1 = document.querySelector('.output1');
let output2 = document.querySelector('.output2');
let output3 = document.querySelector('.output3');
let output4 = document.querySelector('.output4');
let output5 = document.querySelector('.output5');
let output6 = document.querySelector('.output6');
let output7 = document.querySelector('.output7');
let output8 = document.querySelector('.output8');
let gameBoard = document.querySelector('.gameBoard');

output1.style.backgroundColor = 'red';
output1.style.color = 'white';

output2.style.backgroundColor = 'blue';
output2.style.color = 'white';

output3.style.color = 'black';
output4.style.color = 'black';
output5.style.color = 'black';
output6.style.color = 'black';
output7.style.color = 'black';
output8.style.color = 'black';

const game = {
  x1: box1.offsetLeft,
  y1: box1.offsetTop,
  x2: box2.offsetLeft,
  y2: box2.offsetTop,
  speed: 5,
  w1: box1.offsetWidth,
  h1: box1.offsetHeight,
  w2: box2.offsetWidth,
  h2: box2.offsetHeight,
};

const keyz = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
  KeyA: false, // left
  KeyD: false, // right
  KeyW: false, // top
  KeyS: false, // bottom
};

document.addEventListener('keydown', e => {
  if (e.code in keyz) {
    keyz[e.code] = true;
  }
});

document.addEventListener('keyup', e => {
  if (e.code in keyz) {
    keyz[e.code] = false;
  }
});

window.addEventListener('DOMContentLoaded', mover);

function mover() {
  const dim = [
    gameBoard.offsetWidth - box1.offsetWidth,
    gameBoard.offsetHeight - box1.offsetHeight,
  ];

  // Box 1
  if (keyz.ArrowRight && game.x1 < dim[0]) {
    game.x1 += game.speed;
  }
  if (keyz.ArrowLeft && game.x1 > 0) {
    game.x1 -= game.speed;
  }
  if (keyz.ArrowDown && game.y1 < dim[1]) {
    game.y1 += game.speed;
  }
  if (keyz.ArrowUp && game.y1 > 0) {
    game.y1 -= game.speed;
  }

  box1.style.left = `${game.x1}px`;
  box1.style.top = `${game.y1}px`;

  // Box 2
  if (keyz.KeyD && game.x2 < dim[0]) {
    game.x2 += game.speed;
  }
  if (keyz.KeyA && game.x2 > 0) {
    game.x2 -= game.speed;
  }
  if (keyz.KeyS && game.y2 < dim[1]) {
    game.y2 += game.speed;
  }
  if (keyz.KeyW && game.y2 > 0) {
    game.y2 -= game.speed;
  }

  box2.style.left = `${game.x2}px`;
  box2.style.top = `${game.y2}px`;

  output1.innerHTML = `Box #1 X: ${game.x1} Y: ${game.y1} W: ${game.w1} H: ${game.h1}`;
  output2.innerHTML = `Box #2 X: ${game.x2} Y: ${game.y2} W: ${game.w2} H: ${game.h2}`;

  const o3 = game.x1 < game.x2 + game.w2 && game.x1 + game.w1 > game.x2;
  const o4 = game.y1 < game.y2 + game.h2 && game.y1 + game.h1 > game.y2;

  output3.style.color = o3 ? 'green' : 'black';
  output4.style.color = o3 ? 'green' : 'black';
  output5.style.color = o4 ? 'green' : 'black';
  output6.style.color = o4 ? 'green' : 'black';

  output3.innerHTML = `Hor: (${o3} < ${game.x2} + ${game.x2 + game.w2}) && ((${
    game.x1
  } + ${game.w1}) > ${game.x2}) `;
  output4.innerHTML = `Hor: (${o3} < ${game.x2 + game.x2 + game.w2}) && ((${
    game.x1 + game.w1
  }) > ${game.x2}) `;

  output5.innerHTML = `Ver: (${o4} < ${game.x2} + ${game.x2 + game.w2}) && ((${
    game.x1
  } + ${game.w1}) > ${game.x2}) `;
  output6.innerHTML = `Ver: (${o4} < ${game.x2 + game.x2 + game.w2}) && ((${
    game.x1 + game.w1
  }) > ${game.x2}) `;

  const val1 = col(box1, box2);
  output7.style.color = val1 ? 'red' : 'black';
  output7.innerHTML = `HIT ${val1}`;

  const val2 = col(box1, box3);
  console.log(val2);
  const val3 = col(box2, box3);

  box3.style.backgroundColor = val2 ? 'red' : '';
  if (!val2) {
    box3.style.backgroundColor = val3 ? 'blue' : '';
  }
  output8.innerHTML = `CenterHIT Box1 ${val2} Box2 ${val3}`;

  window.requestAnimationFrame(mover);
}

function col(el1, el2) {
  const a = el1.getBoundingClientRect();
  const b = el2.getBoundingClientRect();

  return (
    a.x < b.x + b.width && // Top distance and sirina samog objekta ne smije biti vece od pune sirine b
    a.x + a.width > b.x && // True if full width of a (width+distance from top) is bigger than partial b from left
    a.y < b.y + b.height && // Top distance and visina samog objekta ne smije biti vece od pune visine b
    a.y + a.height > b.y // True if full height of a (visina samog objekta+distance from top) is bigger than partial b from top
  );
}
