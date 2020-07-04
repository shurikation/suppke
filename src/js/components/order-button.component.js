import CURRENT_PRODUCT_DATA from "./current-product.data";

export class OrderButton {
  constructor(button, input, product, dataID) {
    this.$button = document.querySelector(button);
    this.input = input;
    this.product = product;
    this.dataID = dataID;
    this.init();
  }

  init() {
    this.$button.addEventListener('click', () => this.generateCurrentProductData());
  }

  generateCurrentProductData() {
    const $currentProduct = document.querySelector(this.product);
    CURRENT_PRODUCT_DATA.id = $currentProduct.getAttribute(this.dataID);
    CURRENT_PRODUCT_DATA.qty = document.querySelector(this.input).value;
  }
}