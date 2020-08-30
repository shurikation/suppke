export class Menu {
  constructor() {
    this.$togglerWrapper = document.querySelector('.header__toggler-wrapper');
    this.$menuToggler = document.querySelector('.header__menu-toggler');
    this.$menu = document.querySelector('.menu');
    this.$header = document.querySelector('.header');
    this.init();
  }

  init() {
    this.$togglerWrapper.addEventListener('click', () => {
      this.$menuToggler.classList.toggle('toggler--active');
      this.$menu.classList.toggle('menu--opened');
      this.$header.classList.toggle('header--border-none');
    });
  }
}