export class Cart {
  constructor() {
    this.$cart = document.querySelector('.shop-cart');
    this.$cartIcon = document.querySelector('.shop-cart-icon');
    this.$closeCart = document.querySelector('.shop-cart__close-cart');
    this.$cartWrapper = document.querySelector('.shop-card__products-wrapper');
    this.$total = document.querySelector('.shop-card__total-price > span');
    //this.$cartProduct = document.querySelectorAll('.shop-cart__cart-product');
    this.$cartIconValue = document.querySelector('.shop-cart__value');
    this.$cartOrderWrapper = document.querySelector('.shop-card__order-wrapper');
    this.$cartButton = document.querySelector('.shop-cart__button');
    this.$successMessage = document.querySelector('.shop-cart__success-message');
    this.$cartEmptyMessage = document.querySelector('.shop-card__empty-message');
    this.$cartBody = document.querySelector('.shop-cart__body');

    this.products = null;
    this.currentProduct = null;
    this.totalAmount = null;
    this.init();
  }

  init() {
    this.open();
    this.close();
    this.getCurrentProductInfo();

    this.$cartButton.addEventListener('click', () => {
      this.userOrderHandler();
    });

  }

  open() {
    this.$cartIcon.addEventListener('click', () => {
      this.$cart.classList.remove('collapse');
      this.$cartBody.classList.remove('collapse');
      this.emptyMessageHandler();
    });
  }

  close() {
    this.$closeCart.addEventListener('click', () => {
      this.$cart.classList.add('collapse');
    });
  }

  getCurrentProductInfo() {
    this.$cart.addEventListener('get-product-data', (event) => {
      this.currentProduct = event.detail;
      (!this.products) ? this.fetchData() : this.render();
    });
  }

  fetchData() {
    fetch('https://api.npoint.io/19d66b0856fad4035fb1')
        .then(response => response.json())
        .then(db_products => {
          this.products = db_products.goods;
          this.render();
        });
  }

  render() {
    if (this.$cartWrapper.childElementCount > 0 && !this.isProductRepeated()) {
      this.getProductAmount();
      return false;
    } else {
      this.add();
      this.showCartIconValue();
      this.getProductAmount();
      this.getTotalAmount();
      this.remove();
      this.emptyMessageHandler();
    }
  }

  showCartIconValue() {
    this.$cartIconValue.innerText = this.$cartWrapper.childElementCount.toString();
  }

  emptyMessageHandler() {
    if (this.$cartWrapper.childElementCount > 0) {
      this.$cartEmptyMessage.classList.add('collapse');
      this.$cartOrderWrapper.classList.remove('collapse');
    } else if (this.$cartWrapper.childElementCount === 0) {
      this.$cartEmptyMessage.classList.remove('collapse');
      this.$cartOrderWrapper.classList.add('collapse');
    }
  }

  getProductAmount() {
    let totalProductPrice = 0;
    const $cartProduct = document.querySelectorAll('.shop-cart__cart-product');
    $cartProduct.forEach($product => {
      const qty = $product.querySelector('.cart-product__qty').textContent;
      const price = $product.querySelector('.cart-product__item-price > span').textContent;
      totalProductPrice = +qty * +price;
      const $totalPrice = $product.querySelector('.cart-product__total-item-price > span');
      $totalPrice.innerText = totalProductPrice.toString();
    });
  }

  getTotalAmount() {
    let counter = 0;
    const $totalItemPrice = this.$cartWrapper.querySelectorAll('.cart-product__total-item-price > span');
    $totalItemPrice.forEach(item => {
      counter += +item.textContent;
    });
    this.totalAmount = counter;
    this.$total.innerText = this.totalAmount;
  }

  remove() {
    const $deleteItems = document.querySelectorAll('.cart-product__delete_item');
    $deleteItems.forEach(item =>
        item.addEventListener('click', (event) => {
          item.parentElement.remove();
          this.getTotalAmount();
          this.showCartIconValue();
          this.emptyMessageHandler();
        }));
  }

  add() {
    const product = this.products[this.currentProduct.id];
    const productCard =
        `<div class="shop-cart__cart-product" data-id="${this.currentProduct.id}">
                <img class="cart-product__image" src="${product.img}">
                <div class="cart-product__name">${product.name}</div>
                <div class="cart-product__qty">${this.currentProduct.qty}</div>
                <div class="cart-product__multiply">&#10006;</div>
                <div class="cart-product__item-price"><span>${product.price}</span>&#8381;</div> 
                <div class="cart-product__equal">&#61;</div>
                <div class="cart-product__total-item-price"><span></span>&#8381;</div>
                <div class="cart-product__delete_item">&#10006;</div>
         </div>`;
    this.$cartWrapper.insertAdjacentHTML('beforeEnd', productCard);
  }

  isProductRepeated() {
    let repeated = false;
    const $cartProduct = document.querySelectorAll('.shop-cart__cart-product');

    $cartProduct.forEach(product => {

      if (+product.getAttribute('data-id') === +this.currentProduct.id) {
        const productQty = product.querySelector('.cart-product__qty');
        const qty = productQty.textContent;
        const currentQty = +qty + +this.currentProduct.qty;
        productQty.innerText = currentQty.toString();
        repeated = true;
      }
    });

    return !repeated;
  }

  userOrderHandler() {
    const userOrder = [];

    document.querySelectorAll('.shop-cart__cart-product')
        .forEach(product => {
          const item = {
            id: +product.getAttribute('data-id'),
            name: product.querySelector('.cart-product__name').textContent,
            qty: +product.querySelector('.cart-product__qty').textContent,
            totalPrice: +product.querySelector('.cart-product__total-item-price > span').textContent
          };
          userOrder.push(item);
        });

    fetch('http://httpbin.org/post', {
      method: 'POST',
      headers: {
        Authentication: 'order'
      },
      body: JSON.stringify(userOrder)
    })
        .then(response => response.json())
        .then(fakePost => {
          console.log(fakePost);
          this.showMessage();
        });
  }

  showMessage() {
    this.clear();
    this.$cartBody.classList.add('collapse');
    this.$successMessage.classList.remove('collapse');
    setTimeout(() => {
      this.$successMessage.classList.add('collapse');
      this.$cart.classList.add('collapse');
    }, 4000);
  }

  clear() {
    const $deleteItems = document.querySelectorAll('.cart-product__delete_item');
    $deleteItems.forEach(item => {
          item.parentElement.remove();
          this.showCartIconValue();
          this.emptyMessageHandler();
    })
  }
}

