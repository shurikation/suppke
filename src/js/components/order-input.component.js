export class OrderInput {
  constructor(input, minus, plus) {
    this.$input = document.querySelector(input);
    this.$minus = document.querySelector(minus);
    this.$plus = document.querySelector(plus);
    this.counter = parseInt(this.$input.value);
    this.init();
  }

  init() {
    this.$minus.addEventListener('click', () => this.goodsQuantityCounter(1));
    this.$plus.addEventListener('click', () => this.goodsQuantityCounter(-1));
  }

  goodsQuantityCounter(toggler) {
    this.counter -= toggler;
    if(this.counter <= 0) {
      this.counter = 0;
    }
    this.$input.value = this.counter.toString();
    console.log(this.$input.value);
  }
}