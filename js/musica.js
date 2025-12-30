document.addEventListener('DOMContentLoaded', function() {
  const playBtn = document.getElementById('playBtn');
  const audioPlayer = document.getElementById('audioPlayer');
  const targetElement = document.querySelector('.contenedor_nombramiento');

  if (!playBtn) {
    console.error('No se encontró el botón con id="playBtn"');
    return;
  }
  if (!audioPlayer) {
    console.error('No se encontró el elemento <audio> con id="audioPlayer"');
    return;
  }
  if (!targetElement) {
    console.warn('No se encontró el elemento con id="contenedor_nombramiento". El scroll no se realizará.');
  }

  let isPlaying = false;

  playBtn.addEventListener('click', function() {
    if (!isPlaying) {
      audioPlayer.play()
        .then(() => {
          isPlaying = true;
          // Desplazarse suavemente al contenedor_nombramiento (solo si existe)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        })
        .catch(error => {
          console.error('Error al reproducir el audio:', error);
          alert('No se pudo reproducir el audio. ¿Está bloqueado el sonido en el navegador?');
        });
    } else {
      audioPlayer.pause();
      isPlaying = false;
    }
  });

  audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
  });
});