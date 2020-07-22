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
    this.$videoWrapper.classList.remove('collapse');

    this.$videoWrapper.addEventListener('click', () => {
        this.hideVideo();
    });
  }

  hideVideo() {
    this.$videoWrapper.classList.add('collapse');
    //player - global varibale from 'youtube.api.js'
    player.pauseVideo();
  }
}

// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     width: 1280,
//     height: 720,
//     videoId: 'vBF2sndWtHo'
//   });
// }


