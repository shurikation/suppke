const animationTime = 300;
const $buttonsParent = document.querySelector('.product-menu');
const arrayOfCards = Array.from(document.querySelectorAll('.card'));

$buttonsParent.addEventListener('click', (event) => showCorrectCards(event));

function showCorrectCards(event) {
  const currentFilter = event.target.dataset.type;
  if (currentFilter === 'all') {
    arrayOfCards.forEach(card => {
      card.classList.remove('collapse', 'smoothlyHide');
      card.classList.add('smoothlyShow');
      // console.log(card.getAttribute('data-type'));
    });
    return;
  }

  const filteredInvisibleCards = arrayOfCards.filter(card => card.dataset.type !== currentFilter);
  const filteredVisibleCards = arrayOfCards.filter(card => card.dataset.type === currentFilter);

  filteredInvisibleCards.forEach(card => {
    card.classList.remove('smoothlyShow');
    card.classList.add('smoothlyHide');
    card.style.animationDuration = animationTime.toString() + 'ms';
    setTimeout(() => card.classList.add('collapse'), animationTime);

  });

  filteredVisibleCards.forEach(card => {
    card.classList.remove('smoothlyHide');
    card.classList.add('smoothlyShow');
    card.style.animationDuration = animationTime.toString() + 'ms';
    setTimeout(() => card.classList.remove('collapse'), animationTime);
  });
}