document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos que deseas animar
    const elementos = document.querySelectorAll('h1, h2, h3, h4, p, #divPlay');

    // Configuración del observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-view');
                // Deja de observar después de la primera vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 10% del elemento visible
    });

    // Observa cada elemento
    elementos.forEach(el => {
        observer.observe(el);
    });
});
