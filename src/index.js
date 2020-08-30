'use strict';

import {AnimationHandler} from "./js/services/animation-handler";
import {ScrollHandler} from "./js/services/scroll-handler";
import {VideoHandler} from "./js/services/video-handler";
import {Menu} from "./js/components/menu.component";
//import {Header} from "./js/components/header.component";
//import {FactCounters} from "./js/components/facts-counter.component";
import {GalleryFilter} from "./js/components/gallery-filter.component";
import {ChangesSlider} from "./js/components/example-slider.component";
import {OrderInput} from "./js/components/order-input.component";
import {OrderButton} from "./js/components/order-button.component";
import {Cart} from "./js/components/cart.component";
import {OrderSlider} from "./js/components/order-slider.component";
import {OrderProductInfo} from "./js/components/order-product-info.component";
import {Form} from "./js/components/form.component";

const animationHandler = new AnimationHandler();

const orderInput = new OrderInput();
const orderButton = new OrderButton();
const burgerMenu = new Menu();
const scrollHandler = new ScrollHandler();
const galleryFilter = new GalleryFilter();
const changesSlider = new ChangesSlider();
const orderSlider = new OrderSlider();

const orderProductInfo = new OrderProductInfo();

const cart = new Cart();

const form = new Form({});

const videoHandler = new VideoHandler();










