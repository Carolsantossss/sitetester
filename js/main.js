// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Controle do Mouse de Laser
    const cursor = document.getElementById('laser-cursor');
    const trail = document.getElementById('laser-trail');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
        }, 50);
    });

    // 2. Animação da Rolagem a Laser (Scroll-Triggered Engraving)
    const scrollHero = document.getElementById('scroll-hero');
    const engravedLayer = document.getElementById('engraved-layer');
    const scrollLaser = document.getElementById('scroll-laser');

    if (scrollHero && engravedLayer && scrollLaser) {
        window.addEventListener('scroll', () => {
            const rect = scrollHero.getBoundingClientRect();
            const startScroll = rect.top;
            const totalScroll = rect.height - window.innerHeight; 

            let progress = -startScroll / totalScroll;
            
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;

            const percentage = progress * 100;

            if (progress > 0.01 && progress < 0.99) {
                scrollLaser.style.opacity = 1;
            } else {
                scrollLaser.style.opacity = 0;
            }

            scrollLaser.style.top = `${percentage}%`;
            engravedLayer.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`;
        });
    }

    // 3. Efeito de Texto Queimando
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('etch-text')) {
                setTimeout(() => entry.target.classList.add('visible'), 200);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.etch-text').forEach((el) => observer.observe(el));
});
