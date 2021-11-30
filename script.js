const display = document.getElementById('carta-gerada');
const insertLetter = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');

function removeOldLetter() {
  const textDisplay = display.children;
  for (; textDisplay.length > 0;) {
    display.removeChild(textDisplay[0]);
  }
}
function displayLetter() {
  const letter = inputLetter.value;
  const words = letter.split(' ');
  removeOldLetter();
  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = words[i];
    display.appendChild(span);
  }
}

insertLetter.onclick = displayLetter;
