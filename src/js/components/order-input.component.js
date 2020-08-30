export class OrderInput {
  constructor() {
    this.$input = document.querySelector('.count-button__input');
    this.$minus = document.querySelector('.count-button__minus');
    this.$plus = document.querySelector('.count-button__plus');

    this.init();
  }

  init() {
    this.$minus.addEventListener('click', () => this.goodsQuantityCounter(1));
    this.$plus.addEventListener('click', () => this.goodsQuantityCounter(-1));
  }

  goodsQuantityCounter(toggler) {
    let counter = parseInt(this.$input.value);
    counter -= toggler;
    if(counter <= 0) {
      counter = 0;
    }
    this.$input.value = counter.toString();
  }
}