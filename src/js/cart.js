
//Cart
const $shopCart = document.querySelector('.shop-cart');
const $cartIcon = document.querySelector('.shop-cart-icon');


$cartIcon.addEventListener('click', () => {
  $shopCart.style.display = 'block';
});

