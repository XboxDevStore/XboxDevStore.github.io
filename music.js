function togglePlayPause() {
  var audio = document.getElementById('myAudio');
  var playPauseBtn = document.getElementById('playPauseBtn');
  
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseBtn.src = "pause-icon.png";
  } else {
    audio.pause();
    playPauseBtn.src = "play-icon.png";
  }
}
