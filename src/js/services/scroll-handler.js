import {header} from "../components/header.component";
import {factsCounter} from "../components/facts-counter.component";

export class ScrollHandler {
  constructor() {
    this.isScrolling = false;
    this.indentFromElement = 200;//px
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.throttleScroll.bind(this));
  }

  // чтобы вызываеть не более 60 раз в секунду - для избежания излишнего кол-ва вызовов
  throttleScroll() {
    if (this.isScrolling === false) {
      window.requestAnimationFrame(() => {
        header.isHeaderShouldBeShown();
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
