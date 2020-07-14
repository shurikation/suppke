export class OrderInput {
  constructor(props) {
    this.$input = document.querySelector(props.input);
    this.$minus = document.querySelector(props.minus);
    this.$plus = document.querySelector(props.plus);

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