export class AnimationHandler {
  constructor() {
    this.$promoImg = document.querySelector('.promo__img');
    this.$promoTitle = document.querySelector('.promo__title');
    this.$promoSubtitle = document.querySelector('.promo__subtitle');
    this.$promoButton = document.querySelector('.promo__button-buy');
    this.init();
  }

  init() {
    this.preloaderHandler();
  }

  preloaderHandler() {
    window.onload = () => {
      document.body.classList.add('loaded_hiding');
      this.promoAnimationsHandler();
      window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
    };
  }

  promoAnimationsHandler() {
    this.$promoImg.classList.add('fadeInRight');
    this.$promoTitle.classList.add('fadeInUp');
    this.$promoSubtitle.classList.add('fadeInUp');
    this.$promoButton.classList.add('fadeInLeft')
  }

  static getDuration(selector, cssVar) {
    const value = getComputedStyle(document.querySelector(selector)).getPropertyValue(cssVar);
    return +value.match(/\d/g).join('');
  }




}