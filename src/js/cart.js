const $minus = document.querySelector('.count-button__minus');
const $inputNum = document.querySelector('.count-button__num');
const $plus = document.querySelector('.count-button__plus');

let counter = +$inputNum.value;

$minus.addEventListener('click', () => {
  counter -= 1;

  if(counter <= 0) {
    counter = 0;
  }
  $inputNum.value = counter.toString();
});

$plus.addEventListener('click', () => {
  counter += 1;
  $inputNum.value = counter.toString();
});


//Cart
const $shopCart = document.querySelector('.shop-cart');
const $cartIcon = document.querySelector('.shop-cart-icon');


$cartIcon.addEventListener('click', () => {
  $shopCart.style.display = 'block';
});

