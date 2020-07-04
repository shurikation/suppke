// import { Component } from '../core/component'
const { Component } = require('../core/component');

class InputQuantity extends Component{
  constructor($minus, $input, $plus) {
    super();
    this.$minus = $minus;
    this.$plus = $plus;
    this.$input = $input;
  }

  init() {
    console.log('Init!');
    this.$minus.addEventListener('click', this.inputHandler);
    this.$plus.addEventListener('click', this.inputHandler);
  }

  inputHandler() {
    console.log('Hi!');
  }
}

module.exports = { InputQuantity };







// const $minus = document.querySelector('.count-button__minus');
// const $inputNum = document.querySelector('.count-button__num');
// const $plus = document.querySelector('.count-button__plus');
//
// let counter = +$inputNum.value;
//
// $minus.addEventListener('click', () => {
//   counter -= 1;
//
//   if(counter <= 0) {
//     counter = 0;
//   }
//   $inputNum.value = counter.toString();
// });
//
// $plus.addEventListener('click', () => {
//   counter += 1;
//   $inputNum.value = counter.toString();
// });