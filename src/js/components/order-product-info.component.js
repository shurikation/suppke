export class OrderProductInfo {
  constructor() {
    this.$product = document.querySelector('.order__product-info');
    this.$title = document.querySelector('.product-info__title');
    this.$price = document.querySelector('.product-info__price > span');
    this.$description = document.querySelector('.product-info__description');
    this.$weight = document.querySelector('.product-info__weight > span');
    this.init();
  }

  init() {
    this.$product.addEventListener('get-product-id',
        (event) => this.showProductDescription(event.detail.product));
  }

  showProductDescription({name, price, weight, description}) {
    this.$title.innerText = name;
    this.$price.innerText = price;
    this.$weight.innerText = weight;
    this.$description.innerText = description;
  }
}




