// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');
  const imageElement = document.querySelector('#expose img');
  const jsConfetti = new JSConfetti();

  // Horn select change handler
  hornSelect.addEventListener('change', () => {
    const hornValue = hornSelect.value;

    if (hornValue === 'air-horn') {
      audioElement.src = 'assets/audio/air-horn.mp3';
      imageElement.src = 'assets/images/air-horn.svg';
    } else if (hornValue === 'car-horn') {
      audioElement.src = 'assets/audio/car-horn.mp3';
      imageElement.src = 'assets/images/car-horn.svg';
    } else if (hornValue === 'party-horn') {
      audioElement.src = 'assets/audio/party-horn.mp3';
      imageElement.src = 'assets/images/party-horn.svg';
    }
  });

  // Volume slider change handler
  volumeSlider.addEventListener('input', () => {
    const volumeVal = volumeSlider.value;

    if (volumeVal === '0') {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeVal < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeVal < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    audioElement.volume = volumeVal / 100;
  });
  // Play button 
  playButton.addEventListener('click', () => {
    if (hornSelect.value != 'select') {
      audioElement.play();
      jsConfetti.addConfetti();
    }


  });
}