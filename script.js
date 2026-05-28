// ===== ACTIVE NAV LINK =====
(function setActiveNav() {
    const path = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        if (!href || href.startsWith('#') || href.startsWith('http')) return;
        const linkFile = href.split('/').pop();
        if (linkFile === path || (path === 'index.html' && (linkFile === '' || linkFile === 'index.html'))) {
            link.classList.add('active');
        }
    });
})();

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    const expanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', expanded);
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ===== GALLERY MODAL =====
const galleryImages = [
    { src: 'Gallery/Grains.jfif', caption: 'Grains & Crops' },
    { src: 'Gallery/Rice and Millets.jfif', caption: 'Rice & Millets' },
    { src: 'Gallery/TN agri.jfif', caption: 'TN Agriculture' },
    { src: 'Gallery/spices.jfif', caption: 'Spices' },
    { src: 'Gallery/Fruites.jfif', caption: 'Fresh Fruits' },
    { src: 'Gallery/Vegetables.jfif', caption: 'Vegetables' },
    { src: 'Gallery/Sarees.jfif', caption: 'Traditional Sarees' },
    { src: 'Gallery/Cotton sarees.jfif', caption: 'Cotton Sarees' },
    { src: 'Gallery/Handloom saree.jfif', caption: 'Handloom Sarees' },
    { src: 'Gallery/Handloom.jfif', caption: 'Handloom Products' },
    { src: 'Gallery/Power loom.jfif', caption: 'Power Loom' },
    { src: 'Gallery/Lungi.jfif', caption: 'Traditional Lungi' },
    { src: 'Gallery/Clothes.jfif', caption: 'Textile Products' },
    { src: 'Gallery/hen.jfif', caption: 'Poultry' },
    { src: 'Gallery/goat.jfif', caption: 'Goat' },
    { src: 'Gallery/leather.jfif', caption: 'Leather Products' },
    { src: 'Gallery/kitchen vessels.jfif', caption: 'Kitchen Vessels' },
    { src: 'Gallery/wooden.jfif', caption: 'Wooden Items' },
    { src: 'Gallery/plastic item.jfif', caption: 'Plastic Items' },
    { src: 'Gallery/cosmetics.jfif', caption: 'Cosmetics' }
];

// ===== GALLERY CATEGORY FILTER =====
document.querySelectorAll('.gallery-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll('.gallery-filters .filter-btn').forEach(b => {
            const isActive = b === btn;
            b.classList.toggle('active', isActive);
            b.setAttribute('aria-selected', isActive);
        });
        document.querySelectorAll('.gallery-category').forEach(cat => {
            const show = filter === 'all' || cat.dataset.category === filter;
            cat.style.display = show ? '' : 'none';
        });
    });
});

let currentImageIndex = 0;

function openModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');

    currentImageIndex = galleryImages.findIndex(g => g.src === imageSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;

    modalImg.src = imageSrc;
    captionText.textContent = caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(n) {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex + n + galleryImages.length) % galleryImages.length;
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');
    if (modalImg) modalImg.src = galleryImages[currentImageIndex].src;
    if (captionText) captionText.textContent = galleryImages[currentImageIndex].caption;
}

// Expose for inline onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.changeImage = changeImage;

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageModal');
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeModal();
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const redirectInput = document.getElementById('formRedirect');
    if (redirectInput) {
        redirectInput.value = window.location.origin + '/thank-you.html';
    }

    contactForm.addEventListener('submit', () => {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
    });
}

// ===== SMOOTH SCROLL FOR IN-PAGE LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== FADE-IN ON SCROLL =====
const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -80px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .product-card, .gallery-item, .trade-card, .scm-feature, .logistics-card, .testimonial-card, .acc-item, .info-item').forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// ===== STATS COUNTER =====
function animateCounter(element, target) {
    let current = 0;
    const duration = 1200;
    const steps = 50;
    const increment = target / steps;
    const stepTime = duration / steps;
    const suffix = element.dataset.suffix || (element.textContent.includes('+') ? '+' : '');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, stepTime);
}

const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                entry.target.querySelectorAll('.stat-box h3').forEach(el => {
                    const value = parseInt(el.textContent, 10);
                    if (!isNaN(value)) animateCounter(el, value);
                });
            }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
}

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== HERO "GET STARTED" BUTTON =====
document.querySelectorAll('[data-action="contact"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const onContactPage = window.location.pathname.toLowerCase().endsWith('contact.html');
        if (onContactPage) {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
