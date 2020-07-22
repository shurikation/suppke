export class Form {
  constructor({email, text, button, warning}) {
    this.$email = document.querySelector(email);
    this.$text = document.querySelector(text);
    this.$button = document.querySelector(button);
    this.$warning = document.querySelector(warning);
    this.$success = document.querySelector('.footer__success-message-wrapper');
    this.$title = document.querySelector('.form__title');


    this.isWarningShown = false;

    this.formData = {
      email: '',
      text: ''
    };
    this.init();
  }

  init() {
    this.$button.addEventListener('click', (event) => {
      event.preventDefault();
      this.getInputsValue();


      if(this.isWarningShown) this.hideWarningMessage();


      if (this.validateEmail(this.formData.email)) {
        this.sendUserMessage();
      } else {
        this.showWarning();
        this.isWarningShown = true;
      }
    })
  }

  getInputsValue() {
    this.formData.email = this.$email.value;
    this.formData.text = this.$text.value;
  }

  validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
  }

  sendUserMessage() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(this.formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.showSuccessMessage();
        });
  }

  showSuccessMessage() {
    this.clear();
    this.$success.classList.remove('collapse');
    setTimeout(() => {
      this.$success.classList.add('collapse');
    }, 4000);
  }

  showWarning() {
    this.$warning.classList.remove('collapse');
    this.$warning.classList.add('smoothlyShow');
    this.isWarningShown = true;
  }

  hideWarningMessage() {
    this.$warning.classList.remove('smoothlyShow');
    this.$warning.classList.add('collapse');
    this.isWarningShown = false;
  }

  clear() {
    this.$email.value = '';
    this.$text.value = '';
  }
}