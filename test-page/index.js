const btn = document.querySelectorAll('.button-card');
const cards = document.querySelectorAll('.card');
const arrOfCards = [...cards];
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

btn.forEach((button) => button.addEventListener('click', function () {
  if (button.innerHTML === 'For travelers') {
    arrOfCards.find((card) => card === card1).classList.remove('hidden');
    arrOfCards.filter((card) => card !== card1).forEach((card) => card.classList.add('hidden'));
  }

  if (button.innerHTML === 'For travel organization') {
    arrOfCards.find((card) => card === card2).classList.remove('hidden');
    arrOfCards.filter((card) => card !== card2).forEach((card) => card.classList.add('hidden'));
  }

  if (button.innerHTML === 'For employees') {
    arrOfCards.find((card) => card === card3).classList.remove('hidden');
    arrOfCards.filter((card) => card !== card3).forEach((card) => card.classList.add('hidden'));
  }
}))