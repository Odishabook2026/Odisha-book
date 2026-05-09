const langBtn = document.getElementById('lang-switch');
let currentLang = 'en';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'or' : 'en';
    
    // Toggle Button Text
    langBtn.textContent = currentLang === 'en' ? 'ଓଡ଼ିଆ' : 'English';
    
    // Find all translatable elements
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});

// Subtle 3D Parallax
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1024) {
        const blobs = document.querySelector('.background-blobs');
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        blobs.style.transform = `translate(${x}px, ${y}px)`;
    }
});
