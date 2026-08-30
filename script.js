// ============================================
// THEME MANAGEMENT
// ============================================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeInput = document.getElementById('theme-toggle-input');
        this.htmlElement = document.documentElement;
        this.storageKey = 'portfolio-theme';
        
        this.init();
    }

    init() {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem(this.storageKey);
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (systemDark ? 'dark' : 'light');
        
        this.setTheme(theme, Boolean(savedTheme));
        this.themeInput.addEventListener('change', () => {
            this.setTheme(this.themeInput.checked ? 'dark' : 'light', true);
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.storageKey)) {
                this.setTheme(e.matches ? 'dark' : 'light', false);
            }
        });
    }

    setTheme(theme, persist = true) {
        this.htmlElement.setAttribute('data-theme', theme);
        this.themeInput.checked = theme === 'dark';
        this.themeInput.setAttribute('aria-checked', this.themeInput.checked);
        if (persist) {
            localStorage.setItem(this.storageKey, theme);
        }
    }
}

// ============================================
// NAVIGATION
// ============================================

class Navigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = this.navMenu.querySelectorAll('.nav-link');
        
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Update aria-expanded for accessibility
        const isActive = this.hamburger.classList.contains('active');
        this.hamburger.setAttribute('aria-expanded', isActive);
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        this.hamburger.setAttribute('aria-expanded', false);
    }
}

// ============================================
// SCROLL REVEAL
// ============================================

class ScrollReveal {
    constructor() {
        this.revealElements = [];
        this.observer = null;
        this.init();
    }

    init() {
        // Get all elements that should reveal on scroll
        const selectors = [
            '.section-title',
            '.about-text',
            '.about-highlights',
            '.focus-card',
            '.skill-group',
            '.project-card',
            '.experience-item',
            '.education-card',
            '.contact-info',
            '.contact-form-wrapper'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.add('reveal');
                this.revealElements.push(el);
            });
        });

        this.setupObserver();
    }

    setupObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        this.revealElements.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        this.threshold = 300; // Show button after scrolling 300px
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.toggleButton());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleButton() {
        if (window.scrollY > this.threshold) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================
// DYNAMIC PORTFOLIO METRICS
// ============================================

class DynamicPortfolioMetrics {
    constructor() {
        this.experienceStart = {
            year: 2022,
            month: 3
        };
        this.init();
    }

    init() {
        this.updateExperienceYears();
        this.updateCopyrightYear();
    }

    getExperienceYears() {
        const now = new Date();
        const start = new Date(this.experienceStart.year, this.experienceStart.month - 1, 1);
        let years = now.getFullYear() - start.getFullYear();

        if (now.getMonth() < start.getMonth()) {
            years -= 1;
        } else if (now.getMonth() === start.getMonth() && now.getDate() < start.getDate()) {
            years -= 1;
        }

        return years;
    }

    updateExperienceYears() {
        const years = this.getExperienceYears();
        const value = `${years}+`;

        document.querySelectorAll('[data-experience-value]').forEach(el => {
            el.textContent = value;
        });

        document.querySelectorAll('[data-experience-years]').forEach(el => {
            el.textContent = String(years);
        });

        document.querySelectorAll('[data-experience-text]').forEach(el => {
            el.textContent = `${value} years of experience in microfrontend architecture, performance optimization, accessibility, and full-stack delivery.`;
        });
    }

    updateCopyrightYear() {
        const currentYear = new Date().getFullYear();
        const yearNode = document.getElementById('copyright-year');

        if (yearNode) {
            yearNode.textContent = String(currentYear);
        }
    }
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Handle smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new Navigation();
    new ScrollReveal();
    new BackToTop();
    new DynamicPortfolioMetrics();
    new SmoothScroll();
});

// Add prefixed support for smooth scroll behavior fallback
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = () => {
        const getTop = (element) => {
            if (!element) return 0;
            return element.offsetTop + getTop(element.offsetParent);
        };

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({
                        top: getTop(target),
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', smoothScroll);
    } else {
        smoothScroll();
    }
}
