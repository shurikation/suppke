export class OrderButton {
  constructor() {
    this.$button = document.querySelector('.add-to-card-button');

    this.$inputQty = document.querySelector('.count-button__input');
    this.product = '.chosen-product__img';
    this.dataID = 'data-id';
    this.$shopCart = document.querySelector('.shop-cart');
    this.$warning = document.querySelector('.count-button__warning');

    this.isWarningShown = false;
    this.init();
  }

  init() {
    this.$button.addEventListener('click', () => this.productDataHandler());
    this.$inputQty.addEventListener('reset-qty', () => this.resetEnteredProductQty());
  }

  productDataHandler() {
    const $currentProduct = document.querySelector(this.product);
    const id = $currentProduct.getAttribute(this.dataID);
    const qty = this.$inputQty.value;

    if (qty > 0 && this.isWarningShown) this.hideWarningMessage();

    (qty <= 0)
        ? this.showWarningMessage()
        : this.dispatchCurrentProductData(id, qty);

    this.resetEnteredProductQty();
  }

  showWarningMessage() {
    this.$warning.classList.remove('collapsed');
    this.$warning.classList.add('smoothlyShow');
    this.isWarningShown = true;
  }

  hideWarningMessage() {
    this.$warning.classList.remove('smoothlyShow');
    this.$warning.classList.add('collapsed');
    this.isWarningShown = false;
  }

  resetEnteredProductQty() {
    this.$inputQty.value = 0;
  }

  dispatchCurrentProductData(id, qty) {
    this.$shopCart.dispatchEvent(new CustomEvent('get-product-data', {
      detail: {id: id, qty: qty}
    }));
  }
}


