const $togglerWrapper = document.querySelector('.header__toggler-wrapper');
const $menuToggler = document.querySelector('.header__menu-toggler');
const $menu = document.querySelector('.menu');
const $header = document.querySelector('.header');


$togglerWrapper.addEventListener('click', function () {
  $menuToggler.classList.toggle('toggler--active');
  $menu.classList.toggle('menu--opened');
  $header.classList.toggle('header--border-none');
});