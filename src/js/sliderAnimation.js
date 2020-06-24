const $imageBefore = document.querySelector('.changes__image-wrapper--before');
const $inputRange = document.querySelector('.slider-control');
const $inputContainer = document.querySelector('.changes__slider-container');

let inputValueCounter = 0;
let elemWidthCounter = 100;

$inputContainer.addEventListener('click', (event) => {

  if (event.target.classList[0] === 'changes__button--after') valueHandler(1);
  if (event.target.classList[0] === 'changes__button--before') valueHandler(-1);

});

$inputRange.addEventListener('input', () => {
  $imageBefore.style.width = (100 - $inputRange.value) + '%';
});

function valueHandler(number) {
  const ID = window.setInterval(() => {
    $inputRange.disabled = 1;

    inputValueCounter += number;
    elemWidthCounter -= number;

    $inputRange.value = inputValueCounter;
    $imageBefore.style.width = elemWidthCounter + '%';

    if (inputValueCounter >= 100 || inputValueCounter <= 0) clearInterval(ID);

    $inputRange.disabled = 0;
  }, 10);
}
