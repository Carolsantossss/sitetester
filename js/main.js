// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cursor de Laser
    const cursorDot = document.getElementById('cursor-dot');
    const cursorTrail = document.getElementById('cursor-trail');
    
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 60);
    });

    // 2. Scroll-Triggered Laser
    const heroSection = document.getElementById('hero-scroll');
    const engravedLayer = document.getElementById('engraved-layer');
    const laserBeam = document.getElementById('laser-beam');

    if (heroSection && engravedLayer && laserBeam) {
        window.addEventListener('scroll', () => {
            const rect = heroSection.getBoundingClientRect();
            const startScroll = rect.top; 
            const totalScroll = rect.height - window.innerHeight; 
            let progress = -startScroll / totalScroll;
            
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;
            
            const percentage = progress * 100;
            
            if (progress > 0.02 && progress < 0.98) {
                laserBeam.style.opacity = 1;
            } else {
                laserBeam.style.opacity = 0;
            }
            
            laserBeam.style.top = `${percentage}%`;
            engravedLayer.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`;
        });
    }

    // 3. Efeito Etching
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const etchingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => { entry.target.classList.add('active'); }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.etch-text').forEach((element) => {
        etchingObserver.observe(element);
    });
});
