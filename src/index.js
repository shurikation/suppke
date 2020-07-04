//import { InputQuantity } from "./js/components/inputQuantity.component";
const { InputQuantity } = require('../src/js/components/inputQuantity.component');

const inputQty = new InputQuantity (
    '.count-button__minus',
    '.count-button__num',
    '.count-button__plus');

console.log(inputQty);
//
// const $minus = document.querySelector('.count-button__minus');
// const $inputNum = document.querySelector('.count-button__num');
// const $plus = document.querySelector('.count-button__plus');