import {ScrollHandler} from "../misc/scroll-handler";

export class FactCounters {
  constructor({startingBlock, settings}) {
    this.$counterStartingBlock = document.querySelector(startingBlock);
    this.settings = settings;
    this.countersWasScrolled = false;
  }

  isCountersShouldBeRunning() {
    if (ScrollHandler.isElemScrolledDown(this.$counterStartingBlock) && !this.countersWasScrolled) {
      this.settings.forEach(setting => this.startFastCounterPhase(setting));
      this.countersWasScrolled = true;
    } else {
      return false;
    }
  }

  startFastCounterPhase({$element, intervalDelay, totalValue, stepValue}) {
    let counter = 0;
    const integerStepValue = parseInt(stepValue);
    const intermediateValue = totalValue - stepValue;
    const ID = setInterval(() => {
      counter += integerStepValue;
      $element.innerText = counter.toString();
      if (counter >= intermediateValue) {
        clearInterval(ID);
        this.startSlowCounterPhase($element, totalValue, intervalDelay);
      }
    }, intervalDelay);
  }


  startSlowCounterPhase($element, totalValue, intervalDelay, stepValue = 1) {
    let counter = parseInt($element.innerText);
    const ID2 = setInterval(() => {
      counter += stepValue;
      $element.innerText = counter.toString();
      if (counter >= totalValue) {
        clearInterval(ID2);
        return false;
      }
    }, intervalDelay);
  }
}



//Другой компонент

// const $promo = document.querySelector('.promo__img');
//
// window.addEventListener("scroll", throttleScroll);
// let isScrolling = false;
//
// function throttleScroll() {
//   if (isScrolling === false) {
//     window.requestAnimationFrame(function () {
//       isHeaderShouldBeShown();
//       isCountersShouldBeRunning();
//       isScrolling = false;
//     });
//   }
//   isScrolling = true;
// }
//
// function isHeaderShouldBeShown() {
//   if (isBlockScrolledDown($promo)) {
//     $header.classList.add('header--fixed');
//   } else {
//     $header.classList.remove('header--fixed');
//   }
// }
//
// function isBlockScrolledDown($el) {
//   const elementBoundary = $el.getBoundingClientRect();
//   const bottom = elementBoundary.bottom;
//   return (bottom <= 200);
// }
