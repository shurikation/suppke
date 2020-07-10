export class OrderProductInfo {
  constructor({product, title, price, weight, description}) {
    this.$product = document.querySelector(product);
    this.$title = document.querySelector(title);
    this.$price = document.querySelector(price);
    this.$description = document.querySelector(description);
    this.$weight = document.querySelector(weight);
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




