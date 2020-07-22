import {headerFixed} from "../../index";
import {factsCounter} from "../../index";


export class ScrollHandler {
  constructor() {
    this.isScrolling = false;
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.throttleScroll.bind(this));
  }

  //to call 60 times in second / to avoid chatty of the scroll event
  throttleScroll() {
    if (this.isScrolling === false) {
      window.requestAnimationFrame(() => {
        headerFixed.isHeaderShouldBeShown();
        factsCounter.isCountersShouldBeRunning();

        this.isScrolling = false;
      });
    }
    this.isScrolling = true;
  }

  static isElemScrolledDown($el) {
    const elementBoundary = $el.getBoundingClientRect();
    const bottom = elementBoundary.bottom;
    return (bottom <= 200); //px
  }
}
