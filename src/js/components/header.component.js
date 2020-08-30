import {ScrollHandler} from "../services/scroll-handler";

export class Header {
  constructor() {
    this.$header = document.querySelector('.header');
    this.$animationStartingBlock = document.querySelector('.promo');

  }

  isHeaderShouldBeShown() {
    (ScrollHandler.isElemScrolledDown(this.$animationStartingBlock))
        ?  this.$header.classList.add('header--fixed')
        :  this.$header.classList.remove('header--fixed')
  }
}

export const header = new Header();