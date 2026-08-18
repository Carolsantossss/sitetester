// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Custom Laser Cursor Logic
    const cursor = document.getElementById('laser-cursor');
    const trail = document.getElementById('laser-trail');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Trail has a slight delay for cool effect
        setTimeout(() => {
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
        }, 50);
    });

    // Efeito de "Etching" (gravação laser) nos textos e revelação no scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Revela blocos gerais
                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('active');
                }
                // Ativa os textos com efeito de gravação
                if (entry.target.classList.contains('etch-text')) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 300); // pequeno delay
                }
                // Ativa linhas de laser divisórias
                if (entry.target.classList.contains('laser-line')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar no scroll
    document.querySelectorAll('.reveal, .etch-text, .laser-line').forEach((el) => {
        observer.observe(el);
    });

    // Efeito Navbar background no scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg', 'shadow-laser/10');
        } else {
            nav.classList.remove('shadow-lg', 'shadow-laser/10');
        }
    });
});
