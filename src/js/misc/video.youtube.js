  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width: 1280,
      height: 720,
      videoId: 'vBF2sndWtHo'
    });
  }


  var $videoButton = document.querySelector('.video-area__play-button');

  $videoButton.addEventListener('click', (event) => {
    event.preventDefault();

    var $videoWrapper = document.querySelector('.video__body-wrapper');
    $videoWrapper.classList.remove('collapse');

    $videoWrapper.addEventListener('click', () => {
      $videoWrapper.classList.add('collapse');
      player.pauseVideo();
    });
  });

