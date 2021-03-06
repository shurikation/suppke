import {ScrollHandler} from "../services/scroll-handler";

export class FactCounters {
  constructor() {
    this.$counterStartingBlock = document.querySelector('.gallery');
    this.settings = [
      {
        $element: document.querySelector('.fact-num--1'),
        totalValue: 3560,
        intervalDelay: 15,
        stepValue: 73,
      },
      {
        $element: document.querySelector('.fact-num--2'),
        totalValue: 195,
        intervalDelay: 30,
        stepValue: 4,
      },
      {
        $element: document.querySelector('.fact-num--3'),
        totalValue: 455,
        intervalDelay: 30,
        stepValue: 9,
      },
      {
        $element: document.querySelector('.fact-num--4'),
        totalValue: 15,
        intervalDelay: 110,
        stepValue: 1,
      }
    ];

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

export const factsCounter = new FactCounters();