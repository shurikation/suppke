export class ChangesSlider {
  constructor({imgBefore, inputRange, inputContainer}) {
    this.$imageBefore = document.querySelector(imgBefore);
    this.$inputRange = document.querySelector(inputRange);
    this.$inputContainer = document.querySelector(inputContainer);

    this.inputValueCounter = 0;
    this.elemWidthCounter = 100;

    this.init();
  }

  init() {

    this.$inputContainer.addEventListener('click', (event) => {
      if (event.target.classList[0] === 'changes__button--after') this.valueHandler(1);
      if (event.target.classList[0] === 'changes__button--before') this.valueHandler(-1);
    });

    this.$inputRange.addEventListener('input', () => {
      this.$imageBefore.style.width = (100 - this.$inputRange.value) + '%';
    });
  }

  valueHandler(number) {
    const ID = window.setInterval(() => {
      this.$inputRange.disabled = 1;

      this.inputValueCounter += number;
      this.elemWidthCounter -= number;

      this.$inputRange.value = this.inputValueCounter;
      this.$imageBefore.style.width = this.elemWidthCounter + '%';

      if (this.inputValueCounter >= 100 || this.inputValueCounter <= 0) clearInterval(ID);

      this.$inputRange.disabled = 0;
    }, 10);
}










}
