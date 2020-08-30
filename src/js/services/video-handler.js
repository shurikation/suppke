export class VideoHandler {
  constructor() {
    this.path = 'youtube.api.js';
    this.$videoButton = document.querySelector('.video-area__play-button');
    this.$videoWrapper = document.querySelector('.video__body-wrapper');

    this.init();
  }

  init() {
    this.$videoButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.videoDisplayHandler();
      this.activateYoutubeAPI();
    });
  }

  activateYoutubeAPI() {
    const $head = document.head || document.getElementsByTagName('head')[0];
    const $script = document.createElement('script');
    $script.type = 'text/javascript';
    $script.src = this.path;
    $head.appendChild($script);
  }

  videoDisplayHandler() {
    this.$videoWrapper.classList.remove('collapsed');

    this.$videoWrapper.addEventListener('click', () => {
        this.hideVideo();
    });
  }

  hideVideo() {
    this.$videoWrapper.classList.add('collapsed');
    player.pauseVideo();  //var player - глобальная переменная из 'youtube.api.js'
  }
}

