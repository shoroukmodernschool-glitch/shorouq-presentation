// ===================================
// Initialize Lucide Icons
// ===================================
lucide.createIcons();


// ===================================
// Scroll Animation Observer
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger stat bar animations when visible
            const bars = entry.target.querySelectorAll('.stat-bar');
            bars.forEach(bar => {
                bar.style.animationPlayState = 'running';
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});


// ===================================
// Stat Bars - Pause Initially
// ===================================
document.querySelectorAll('.stat-bar').forEach(bar => {
    bar.style.animationPlayState = 'paused';
});


// ===================================
// Side Navigation Active State
// ===================================
const sections = [
    'hero', 'problem', 'survey', 'feasibility',
    'analysis', 'uiux', 'frontend', 'database', 'backend', 'ai'
];

const navButtons = document.querySelectorAll('.side-nav-btn');

function updateActiveNav() {
    let current = '';

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200) {
                current = id;
            }
        }
    });

    navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', sections[i] === current);
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();


// ===================================
// Smooth Scroll to Section
// ===================================
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// ===================================
// Floating Particles
// ===================================
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-10px';
    particle.style.animationDuration = (8 + Math.random() * 12) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.opacity = '0';
    const size = (2 + Math.random() * 3) + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 25000);
}

// Create initial batch
for (let i = 0; i < 15; i++) {
    setTimeout(createParticle, i * 800);
}

// Continue creating
setInterval(createParticle, 2000);


// ===================================
// Header Border on Scroll
// ===================================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    } else {
        header.style.borderBottomColor = 'rgba(255,255,255,0.05)';
    }
});