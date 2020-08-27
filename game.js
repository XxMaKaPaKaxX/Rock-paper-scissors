let playerChoice = '';
let AIChoice = '';

let rounds = 0;
let wins = 0;
let loses = 0;
let draws = 0;

const options = [];

const getAIchoice = () => options[Math.floor(Math.random() * options.length)];

const pYourChoice = document.querySelector('.your-choice');
const pAIchoice = document.querySelector('.ai-choice');
const whoWin = document.querySelector('.who-win');

const roundsCounter = document.querySelector('.numbers').firstElementChild;
const winsCounter = document.querySelector('.wins').firstElementChild;
const losesCounter = document.querySelector('.losses').firstElementChild;
const drawsCounter = document.querySelector('.draws').firstElementChild;

const getRezultOfRound = (playerC = playerChoice, AIc = AIChoice) => {
  if (playerC === AIc) {
    return 'Remis';
  } else if (playerC === 'papier') {
    switch (AIc) {
      case 'kamień':
        return 'Ty :)';
      case 'nożyczki':
        return 'Komputer :(';
    }
  } else if (playerC === 'kamień') {
    switch (AIc) {
      case 'nożyczki':
        return 'Ty :)';
      case 'papier':
        return 'Komputer :(';
    }
  } else if (playerC === 'nożyczki') {
    switch (AIc) {
      case 'papier':
        return 'Ty :)';
      case 'kamień':
        return 'Komputer :(';
    }
  }
};
const renderYellowBorder = (target) => {
  target.style.borderWidth = '5px';
  target.style.borderColor = 'yellow';
  target.style.borderStyle = 'solid';
};

const deleteYellowBoeder = (target) => {
  target.style.borderWidth = '';
  target.style.borderColor = '';
  target.style.borderStyle = '';
};

const divImages = document.querySelector('.select');
const gameImages = [...divImages.querySelectorAll('img')];
gameImages.forEach((img) => {
  options.push(img.dataset.option);
  img.addEventListener('click', (e) => {
    playerChoice = e.target.dataset.option;
    gameImages.forEach((img) => deleteYellowBoeder(img));
    renderYellowBorder(e.target);
  });
});

const gameButton = document.querySelector('.start');

const startTheGame = () => {
  if (playerChoice === '') {
    alert('najpierw wybierz, potem graj');
    return;
  }
  AIChoice = getAIchoice();

  pYourChoice.textContent = playerChoice;
  pAIchoice.textContent = AIChoice;

  const result = getRezultOfRound();
  whoWin.style.color = '';
  whoWin.textContent = result;

  roundsCounter.textContent = ++rounds;

  switch (result) {
    case 'Ty :)':
      winsCounter.textContent = ++wins;
      whoWin.style.color = 'green';
      break;
    case 'Komputer :(':
      losesCounter.textContent = ++loses;
      whoWin.style.color = 'red';
      break;
    default:
      drawsCounter.textContent = ++draws;
      break;
  }
};

gameButton.addEventListener('click', startTheGame);
