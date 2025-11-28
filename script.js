// ============================================
// Navigation & Mobile Menu
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ============================================
// Scroll Reveal Animation
// ============================================

const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Apply reveal animation to about and product cards
const applyRevealAnimation = () => {
    const aboutCards = document.querySelectorAll('.about-card');
    const productCards = document.querySelectorAll('.product-card');

    aboutCards.forEach(card => card.classList.add('reveal'));
    productCards.forEach(card => card.classList.add('reveal'));
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', applyRevealAnimation);

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formInputs = contactForm.querySelectorAll('input, textarea');
        const button = contactForm.querySelector('button');

        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        button.disabled = true;
        button.textContent = 'Sending...';

        setTimeout(() => {
            button.textContent = 'Message Sent! ✓';
            button.style.background = 'var(--secondary-color)';

            formInputs.forEach(input => {
                input.value = '';
            });

            setTimeout(() => {
                button.disabled = false;
                button.textContent = 'Send Message';
                button.style.background = '';
            }, 3000);
        }, 800);
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

const handleSmoothScroll = (e) => {
    const target = e.target;

    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
};

document.addEventListener('click', handleSmoothScroll);

// ============================================
// Parallax Effect on Hero Section
// ============================================

const heroVisual = document.querySelector('.hero-visual');
const heroSection = document.querySelector('.hero');
const coffeeScene = document.querySelector('.coffee-scene');
const coffeeMugSVG = document.querySelector('.coffee-mug-svg');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && heroSection) {
        const scrollY = window.scrollY;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

        if (scrollY < heroBottom) {
            const parallaxOffset = scrollY * 0.5;
            heroVisual.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }
});

// ============================================
// Coffee Mug Hover Interactions
// ============================================

if (coffeeScene) {
    coffeeScene.addEventListener('mouseenter', () => {
        if (coffeeMugSVG) {
            coffeeMugSVG.style.animation = 'mugTilt 0.6s ease-in-out forwards';
        }
        coffeeScene.style.animation = 'none';
    });

    coffeeScene.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const rect = coffeeScene.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
            
            if (coffeeMugSVG) {
                coffeeMugSVG.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
            }
        }
    });

    coffeeScene.addEventListener('mouseleave', () => {
        if (coffeeMugSVG) {
            coffeeMugSVG.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            coffeeMugSVG.style.animation = 'mugRotate 20s ease-in-out infinite';
        }
        coffeeScene.style.animation = 'subtleFloat 4s ease-in-out infinite';
    });
}

// ============================================
// Enhanced Interactive Elements
// ============================================

const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// Page Load Animations
// ============================================

window.addEventListener('load', () => {
    revealElements();
});

// Initial reveal check on page load
document.addEventListener('DOMContentLoaded', () => {
    applyRevealAnimation();
    revealElements();
});
