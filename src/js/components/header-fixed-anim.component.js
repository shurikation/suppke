import {ScrollHandler} from "../handlers/scroll-handler";

export class HeaderFixed {
  constructor({header, startingBlock}) {
    this.$header = document.querySelector(header);
    this.$animationStartingBlock = document.querySelector(startingBlock);

  }

  isHeaderShouldBeShown() {
    (ScrollHandler.isElemScrolledDown(this.$animationStartingBlock))
        ?  this.$header.classList.add('header--fixed')
        :  this.$header.classList.remove('header--fixed')
  }
}