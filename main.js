// ---- Set today's date in calendar ----
(function setCalendarDate() {
    const el = document.getElementById('today-date');
    if (!el) return;
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const d = new Date();
    el.textContent = months[d.getMonth()] + ' ' + d.getDate();
})();

// ---- Floating particles ----
(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#D63B2F', '#7EC8E3', '#F5A623', '#FDF5E6'];
    for (let i = 0; i < 18; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 10 + 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (Math.random() * 20 + 15) + 's';
        p.style.animationDelay = (Math.random() * -30) + 's';
        container.appendChild(p);
    }
})();

// ---- Intersection Observer fade-in ----
(function observeElements() {
    const items = document.querySelectorAll('.timeline-item, .feature-card');
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        obs.observe(item);
    });
})();
