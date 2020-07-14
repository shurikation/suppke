export class BurgerMenu {
  constructor(props) {
    this.props = props;
    this.$togglerWrapper = document.querySelector(props.togglerWrapper);
    this.$menuToggler = document.querySelector(props.menuToggler);
    this.$menu = document.querySelector(props.menu);
    this.$header = document.querySelector(props.header);
    this.init();
  }

  init() {
    this.$togglerWrapper.addEventListener('click', () => {
      this.$menuToggler.classList.toggle(this.props.active);
      this.$menu.classList.toggle(this.props.open);
      this.$header.classList.toggle(this.props.borderNone);
    });
  }
}