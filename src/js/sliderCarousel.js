//Slider
const $arrowLeft = document.querySelector('.product-slider__arrow--left');
const $arrowRight = document.querySelector('.product-slider__arrow--right');
const $sliderImages = document.querySelector('.product-slider__images');
const $sliderChosenImage = document.querySelector('.product-slider__chosen-img');

//Product Info
const $productTitle = document.querySelector('.product-info__title');
const $productPrice = document.querySelector('.product-info__price');
const $productDescription = document.querySelector('.product-info__description');

const data = [
  {
    img: 'https://i.ibb.co/4RG4w9K/item-1.png',
    name: 'Suppke Honey Casein',
    price: 3800,
    weight: 2,
    description: 'Качественный порошковый казеин класса премиум со вкусом натурального мёда. Идеальный протеин для набора мышечной массы. Принимать непосредственно перед сном, поскольку на протяжении всей ночи казеин будет поддерживать состояние восстановления и роста, снабжая организм необходимыми нутриентами.'
  },
  {
    img: 'https://i.ibb.co/GHJ5R6x/item-2.png',
    name: 'Suppke Blueberries Whey',
    price: 4750,
    weight: 1.5,
    description: 'Сывороточный протеин со вкусом черники. Усваивается за 1 - 1,5 часа. В день необходимо принимать 2-3 порции. В тренировочные дни первую порцию необходимо принять утром, сразу после пробуждения, вторую порцию за 1,5 часа до тренировки и 3 порцию сразу после тренировки.'
  },
  {
    img: 'https://i.ibb.co/R3vZFhh/item-3.png',
    name: 'Suppke Cherry Whey',
    price: 4500,
    weight: 1.5,
    description: 'Сывороточный протеин со вкусом вишни. Полезный и натуральный продукт, который употребляют люди по всему миру. Он помогает нарастить мышечную массу, развить энергию, физическую силу и выносливость при регулярных занятиях спортом.'
  },
  {
    img: 'https://i.ibb.co/6H6z7tn/item-4.png',
    name: 'Suppke Blueberries Casein',
    price: 4280,
    weight: 2,
    description: 'Качественный порошковый казеин класса премиум со вкусом черники. Идеальная протеин для набора мышечной массы. Принимать непосредственно перед сном, поскольку на протяжении всей ночи казеин будет поддерживать состояние восстановления и роста, снабжая организм необходимыми нутриентами.'
  },
  {
    img: 'https://i.ibb.co/p1613sV/item-5.png',
    name: 'Suppke Chocolate Casein',
    price: 3700,
    weight: 2,
    description: 'Качественный порошковый казеин класса премиум со вкусом черники. Идеальная протеин для набора мышечной массы. Принимать непосредственно перед сном, поскольку на протяжении всей ночи казеин будет поддерживать состояние восстановления и роста, снабжая организм необходимыми нутриентами.'
  },
  {
    img: 'https://i.ibb.co/vw7CKrs/item-6.png',
    name: 'Suppke Vanilla Whey',
    price: 4650,
    weight: 1.5,
    description: 'Сывороточный протеин со вкусом ванили. Полезный и натуральный продукт, который употребляют люди по всему миру. Он помогает нарастить мышечную массу, развить энергию, физическую силу и выносливость при регулярных занятиях спортом.'
  }
];

const maxIDValueOfProducts = data.length - 1;
const numOfSliderImages = 3;

sliderImagesRender();

$arrowLeft.addEventListener('click', leftArrowClickHandler);
$arrowRight.addEventListener('click', rightArrowClickHandler);
$sliderImages.addEventListener('click', imageClickHandler);

function sliderImagesRender() {
  for (let id = 0; id < numOfSliderImages; id++) {
    addImageToSlider(id, 'beforeEnd', data);
  }

  displayChosenImage($sliderImages.firstElementChild);
}

function leftArrowClickHandler() {
  let idOfNextBlock = getElemID($sliderImages.lastElementChild) + 1;

  if (idOfNextBlock > maxIDValueOfProducts) {
    idOfNextBlock = 0;
  }

  addImageToSlider(idOfNextBlock, 'beforeEnd', data);

  $sliderImages.firstElementChild.remove();
  displayChosenImage($sliderImages.firstElementChild);
}

function rightArrowClickHandler() {
  let idOfPrevBlock = getElemID($sliderImages.firstElementChild) - 1;

  if (idOfPrevBlock < 0) {
    idOfPrevBlock = maxIDValueOfProducts;
  }

  addImageToSlider(idOfPrevBlock, 'afterBegin', data);

  $sliderImages.lastElementChild.remove();
  displayChosenImage($sliderImages.lastElementChild);
}

function imageClickHandler(event) {
  if (event.target.tagName !== 'IMG') return false;
  displayChosenImage(event.target);
}

function displayChosenImage($image) {
  if ($sliderChosenImage.childElementCount > 0) {
    let a = $sliderChosenImage.firstElementChild;
    a.remove();
  }
  const $imageClone = $image.cloneNode(true);

  $imageClone.className = 'chosen-img__img';
  $sliderChosenImage.insertAdjacentElement('afterBegin', $imageClone);

  showProductDescription($imageClone.getAttribute('data-idx'));
}

function getElemID(block) {
  const blockValue = block.classList.value;
  return parseInt(blockValue.match(/[0-9]/s)[0]);
}

function addImageToSlider(id, position, data) {
  const elem = `<img class="product-slider__img product-img_${id}" 
                src="${data[id].img}"
                data-idx="${id}" 
                alt="спортивное питание">`;

  $sliderImages.insertAdjacentHTML(position, elem);
}

function showProductDescription(idx) {
  $productTitle.innerText = data[idx].name;
  $productPrice.innerText = data[idx].price;
  $productDescription.innerText = data[idx].description;
}
