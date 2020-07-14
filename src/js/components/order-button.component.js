export class OrderButton {
  constructor(props) {
    this.$button = document.querySelector(props.orderButton);

    this.$inputQty = document.querySelector(props.inputQty);
    this.product = props.currentProduct;
    this.dataID = props.dataID;
    this.$shopCart = document.querySelector(props.shopCart);
    this.$countButtonWarning = document.querySelector(props.warningMessage);

    this.warningIsShown = false;
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

    if (qty > 0 && this.warningIsShown) this.hideWarningMessage();

    (qty <= 0)
        ? this.showWarningMessage()
        : this.dispatchCurrentProductData(id, qty);

    this.resetEnteredProductQty();
  }

  showWarningMessage() {
    this.$countButtonWarning.classList.remove('collapse');
    this.$countButtonWarning.classList.add('smoothlyShow');
    this.warningIsShown = true;
  }

  hideWarningMessage() {
    this.$countButtonWarning.classList.remove('smoothlyShow');
    this.$countButtonWarning.classList.add('smoothlyHide');
    setTimeout(() => this.$countButtonWarning.classList.add('collapse'), 150);
    this.warningIsShown = false;
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


