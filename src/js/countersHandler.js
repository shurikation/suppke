const $factsArea = document.querySelector('.gallery');

const countersSettings = [
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
  },
];

let countersWasScrolled = true;

function isCountersShouldBeRunning() {
  if (isBlockScrolledDown($factsArea) && countersWasScrolled) {
    countersWasScrolled = false;
    countersSettings.forEach(data => runFastCounter(data));
  } else {
    return false;
  }
}

//The first phase of the Counter - Fast phase
function runFastCounter({$element, intervalDelay, totalValue, stepValue}) {
  let counter = 0;
  const integerStepValue = parseInt(stepValue);
  const intermediateValue = totalValue - stepValue;
  const ID = setInterval(() => {
    counter += integerStepValue;
    $element.innerText = counter.toString();
    if (counter >= intermediateValue) {
      clearInterval(ID);
      runSlowCounter($element, totalValue, intervalDelay);
    }
  }, intervalDelay);
}

//The last phase of the counter - Slow phase
function runSlowCounter($element, totalValue, intervalDelay, stepValue = 1) {
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
