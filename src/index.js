'use strict';

import {AnimationHandler} from "./js/handlers/animation-handler";
import {ScrollHandler} from "./js/handlers/scroll-handler";
import {VideoHandler} from "./js/handlers/video-handler";

import {BurgerMenu} from "./js/components/burger-menu.component";
import {HeaderFixed} from "./js/components/header-fixed-anim.component";
import {FactCounters} from "./js/components/facts-counter.component";
import {GalleryFilter} from "./js/components/gallery-filter.component";
import {ChangesSlider} from "./js/components/changes-slider.component";
import {OrderInput} from "./js/components/order-input.component";
import {OrderButton} from "./js/components/order-button.component";
import {Cart} from "./js/components/cart.component";
import {OrderSlider} from "./js/components/order-slider.component";
import {OrderProductInfo} from "./js/components/order-product-info.component";
import {Form} from "./js/components/form.component";

const animationHandler = new AnimationHandler();

const orderInput = new OrderInput({
  input: '.count-button__input',
  minus: '.count-button__minus',
  plus: '.count-button__plus'
});

const orderButton = new OrderButton({
  orderButton: '.add-to-card-button',
  inputQty: '.count-button__input',
  currentProduct: '.chosen-product__img',
  dataID: 'data-id',
  shopCart: '.shop-cart',
  warningMessage: '.count-button__warning'
});

const burgerMenu = new BurgerMenu({
  togglerWrapper: '.header__toggler-wrapper',
  menuToggler: '.header__menu-toggler',
  menu: '.menu',
  header: '.header',
  active: 'toggler--active',
  open: 'menu--opened',
  borderNone: 'header--border-none'
});
const scrollHandler = new ScrollHandler();

export const factsCounter = new FactCounters({
  startingBlock: '.gallery',
  settings: [
    {
      $element: document.querySelector('.fact-num--1'),
      totalValue: 3560,
      intervalDelay: 15,
      stepValue: 73,
    },
    {
      $element: document.querySelector('.fact-num--2'),
      totalValue: 195,
      intervalDelay: 30,
      stepValue: 4,
    },
    {
      $element: document.querySelector('.fact-num--3'),
      totalValue: 455,
      intervalDelay: 30,
      stepValue: 9,
    },
    {
      $element: document.querySelector('.fact-num--4'),
      totalValue: 15,
      intervalDelay: 110,
      stepValue: 1,
    }
  ]
});

export const headerFixed = new HeaderFixed({
  header: '.header',
  startingBlock: '.promo'
});

const galleryFilter = new GalleryFilter({
  varSelector: ':root',
  cssVarName: '--smoothly-anims-duration',
  buttonsParent: '.product-menu',
  card: '.card'
});

const changesSlider = new ChangesSlider({
  imgBefore: '.changes__image-wrapper--before',
  inputRange: '.slider-control',
  inputContainer: '.changes__slider-container'
});

const orderSlider = new OrderSlider({
  arrowLeft: '.product-slider__arrow--left',
  arrowRight: '.product-slider__arrow--right',
  images: '.product-slider__images',
  chosenImage: '.product-slider__chosen-product',
  input: '.count-button__input'
});

const orderProductInfo = new OrderProductInfo({
  product: '.order__product-info',
  title: '.product-info__title',
  price: '.product-info__price > span',
  weight: '.product-info__weight > span',
  description: '.product-info__description'
});

const cart = new Cart({
  cart: '.shop-cart',
  cartIcon: '.shop-cart-icon',
  closeCart: '.shop-cart__close-cart',
  cartWrapper: '.shop-cart__products-wrapper',
  total: '.shop-cart__total-price > span',
  cartIconValue: '.shop-cart__value',
  cartOrderWrapper: '.shop-cart__order-wrapper',
  cartButton: '.shop-cart__button',
  successMessage: '.shop-cart__success-message',
  cartEmptyMessage: '.shop-cart__empty-message',
  cartBody: '.shop-cart__body'
});

const form = new Form({
  email: '.form__email',
  text: '.form__text',
  button: '.form__button',
  warning: '.form__warning'
});

const videoHandler = new VideoHandler();










