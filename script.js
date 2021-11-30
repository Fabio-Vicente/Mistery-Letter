const display = document.getElementById('carta-gerada');
const insertLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const classes = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function removeOldLetter() {
  const textDisplay = display.children;
  for (; textDisplay.length > 0;) {
    display.removeChild(textDisplay[0]);
  }
}
function verifyEmptyText(arrOfWords) {
  for (let i = 0; i < arrOfWords.length; i += 1) {
    if (arrOfWords[i] !== '') {
      return false;
    }
  }
  return true;
}
function reinitNumber(number, limit) {
  if (number >= limit) {
    return 0;
  }
  return number;
}
function attatchClasses(word) {
  const numberOfClassees = 1 + parseInt(Math.random() * classes.length, 10);
  let initialClass = parseInt(Math.random() * classes.length, 10);
  for (let i = 0; i < numberOfClassees; i += 1) {
    initialClass = reinitNumber(initialClass, classes.length);
    const classPosition = parseInt(Math.random() * classes[initialClass].length, 10);
    word.classList.add(classes[initialClass][classPosition]);
    initialClass += 1;
  }
}
function displayLetter() {
  const letter = inputLetter.value;
  const words = letter.split(' ');
  removeOldLetter();
  display.innerText = '';
  const empty = verifyEmptyText(words);
  if (empty) {
    display.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = words[i];
      display.appendChild(span);
      attatchClasses(span);
    }
  }
}

insertLetter.onclick = displayLetter;
