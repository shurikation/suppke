
export class Cart {
  constructor() {
    this.$shopCart = document.querySelector('.shop-cart');
    this.$cartIcon = document.querySelector('.shop-cart-icon');
    this.init();
  }

  init() {
 this.$shopCart.addEventListener('get-product-data', function (event) {
   console.log(event.detail);
 });

 this.$cartIcon.addEventListener('click', () => {
      this.$shopCart.style.display = 'block';
    });
  }
}