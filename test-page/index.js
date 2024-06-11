const btn = document.querySelectorAll('.cards__button');
const cards = document.querySelectorAll('.card');
const arrayOfCards = [...cards];
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

btn.forEach((button) => button.addEventListener('click', function () {
  if (button.innerHTML === 'For travelers') {
    removeClassHidden(card1);
    addClassHidden(card1);
  }

  if (button.innerHTML === 'For travel organization') {
    removeClassHidden(card2);
    addClassHidden(card2);
  }

  if (button.innerHTML === 'For employees') {
    removeClassHidden(card3);
    addClassHidden(card3);
  }
}))

function removeClassHidden(card) {
  arrayOfCards.find((element) => element === card).classList.remove('hidden');
}

function addClassHidden(card) {
  arrayOfCards.filter((element) => element !== card).forEach((elem) => elem.classList.add('hidden'));
}
