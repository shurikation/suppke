export class Form {
  constructor({email, text, button}) {
    this.$email = document.querySelector(email);
    this.$text = document.querySelector(text);
    this.$button = document.querySelector(button);
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

      if (this.validateEmail(this.formData.email)) {
        this.fetchUserMessage();
      } else {
        this.showFailureMessage();
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

  fetchUserMessage() {
    fetch('http://httpbin.org/post', {
      method: 'POST',
      headers: {
        Authentication: 'message'
      },
      body: JSON.stringify(this.formData)
    })
        .then(response => response.json())
        .then(fakeResponse => {
          console.log(fakeResponse);
          this.showSuccessMessage();
        });
  }

  showSuccessMessage() {
    console.log('Ваше сообщение отправлено!');
  }

  showFailureMessage() {
    console.log('Введите нормальный емэйл бля!!!!11');
  }



}