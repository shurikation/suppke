import {AnimationHandler} from "../handlers/animation-handler";

export class GalleryFilter {
  constructor({varSelector, cssVarName, buttonsParent, card}) {
    this.animationTime = AnimationHandler.getDuration(varSelector, cssVarName);
    this.$buttonsParent = document.querySelector(buttonsParent);
    this.arrayOfCards = Array.from(document.querySelectorAll(card));

    this.init();
  }

  init() {
    this.$buttonsParent.addEventListener('click', (event) => this.showCorrectCards(event));
  }

  showCorrectCards(event) {
    const currentFilter = event.target.dataset.type;
    if (currentFilter === 'all') {
      this.arrayOfCards.forEach(card => {
        card.classList.remove('collapse', 'smoothlyHide');
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
      setTimeout(() => card.classList.add('collapse'), this.animationTime);
    });

    filteredVisibleCards.forEach(card => {
      card.classList.remove('smoothlyHide');
      card.classList.add('smoothlyShow');
      card.style.animationDuration = this.animationTime.toString() + 'ms';
      setTimeout(() => card.classList.remove('collapse'), this.animationTime);
    });
  }
}