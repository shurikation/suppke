import {AnimationHandler} from "../services/animation-handler";

export class GalleryFilter {
  constructor() {
    this.animationTime = AnimationHandler.getDuration(':root', '--smoothly-anims-duration');
    this.$buttonsParent = document.querySelector('.product-menu');
    this.arrayOfCards = Array.from(document.querySelectorAll('.card'));

    this.init();
  }

  init() {
    this.$buttonsParent.addEventListener('click', (event) => this.showCorrectCards(event));
  }

  showCorrectCards(event) {
    const currentFilter = event.target.dataset.type;

    if (currentFilter === 'all') {
      this.arrayOfCards.forEach(card => {
        card.classList.remove('collapsed', 'smoothlyHide');
        card.classList.add('smoothlyShow');
      });
      return;
    }

    const filteredInvisibleCards = this.arrayOfCards.filter(card => card.dataset.type !== currentFilter);
    const filteredVisibleCards = this.arrayOfCards.filter(card => card.dataset.type === currentFilter);

    filteredInvisibleCards.forEach(card => {
      card.classList.remove('smoothlyShow');
      card.classList.add('smoothlyHide');
      card.style.animationDuration = this.animationTime.toString() + 'ms';
      setTimeout(() => card.classList.add('collapsed'), this.animationTime);
    });

    filteredVisibleCards.forEach(card => {
      card.classList.remove('smoothlyHide');
      card.classList.add('smoothlyShow');
      card.style.animationDuration = this.animationTime.toString() + 'ms';
      setTimeout(() => card.classList.remove('collapsed'), this.animationTime);
    });
  }
}