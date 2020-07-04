import { OrderInput } from "./js/components/order-input.component";
import { OrderButton } from "./js/components/order-button.component";

const orderInput = new OrderInput(
    '.count-button__input',
    '.count-button__minus',
    '.count-button__plus');

const orderButton = new OrderButton(
    '.add-to-card-button',
    '.count-button__input',
    '.chosen-product__img',
    'data-id');







