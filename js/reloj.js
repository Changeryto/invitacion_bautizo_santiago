// Fecha de destino: 7 de febrero de 2026 a las 16:45 (hora local del navegador)
const destino = new Date('2026-02-07T16:45:00');

// Función que actualiza el reloj
function actualizarReloj() {
  const ahora = new Date();
  let diff = destino - ahora;

  // Si ya pasó la fecha, mostrar 0 en todo
  if (diff < 0) {
    diff = 0;
  }

  // Calcular días, horas, minutos y segundos
  const diasTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horasR = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutosR = Math.floor((diff / (1000 * 60)) % 60);
  const segundosR = Math.floor((diff / 1000) % 60);

  // Formato: DD:HH:MM:SS
  const textoReloj = `${diasTotal}:${String(horasR).padStart(2, '0')}:${String(minutosR).padStart(2, '0')}:${String(segundosR).padStart(2, '0')}`;

  // Actualizar el elemento del DOM
  document.getElementById('tiempoReloj').textContent = textoReloj;
}

// Inicializar el reloj al cargar
actualizarReloj();

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);
