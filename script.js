const display = document.getElementById('carta-gerada');
const insertLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const counterOfWords = document.getElementById('carta-contador');
const classes = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];
const settings = document.getElementById('settings');
const clearButton = document.createElement('button');
clearButton.innerText = 'Limpar';
clearButton.className = 'clear';

function removeOldLetter() {
  const textDisplay = display.children;
  for (; textDisplay.length > 0;) {
    display.removeChild(textDisplay[0]);
  }
  display.innerText = '';
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
function attatchClasses(word, nClasses = 0) {
  let numberOfClasses = nClasses;
  if (numberOfClasses < 1 || numberOfClasses > classes.length) {
    numberOfClasses = 1 + parseInt(Math.random() * classes.length, 10);
  }
  let initialClass = parseInt(Math.random() * classes.length, 10);
  for (let i = 0; i < numberOfClasses; i += 1) {
    initialClass = reinitNumber(initialClass, classes.length);
    const classPosition = parseInt(Math.random() * classes[initialClass].length, 10);
    word.classList.add(classes[initialClass][classPosition]);
    initialClass += 1;
  }
}
function insertLetterButtons() {
  settings.appendChild(clearButton);
}
function displayLetter() {
  const letter = inputLetter.value;
  const words = letter.split(' ');
  removeOldLetter();
  const empty = verifyEmptyText(words);
  if (empty) {
    display.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = words[i];
      display.appendChild(span);
      attatchClasses(span, 4);
    }
    counterOfWords.innerText = words.length;
    counterOfWords.nextElementSibling.innerText = 'palavras';
    insertLetterButtons();
  }
}
function changeStyle(click) {
  const word = click.target;
  if (word !== display) {
    word.className = '';
    attatchClasses(word, 4);
  }
}
function clearLetter() {
  const words = display.children;
  for (;words.length > 0;) {
    display.removeChild(words[0]);
  }
  inputLetter.value = '';
  counterOfWords.innerText = '';
  counterOfWords.nextElementSibling.innerText = '';
  settings.removeChild(clearButton);
}

insertLetter.onclick = displayLetter;
display.onclick = changeStyle;
clearButton.onclick = clearLetter;
