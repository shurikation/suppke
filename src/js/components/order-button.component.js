export class OrderButton {
  constructor(props) {
    this.$button = document.querySelector(props.orderButton);

    this.$inputQty = document.querySelector(props.inputQty);
    this.product = props.currentProduct;
    this.dataID = props.dataID;
    this.$shopCart = document.querySelector(props.shopCart);
    this.$warning = document.querySelector(props.warningMessage);

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
    this.$warning.classList.remove('collapse');
    this.$warning.classList.add('smoothlyShow');
    this.isWarningShown = true;
  }

  hideWarningMessage() {
    this.$warning.classList.remove('smoothlyShow');
    this.$warning.classList.add('collapse');
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


