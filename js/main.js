/**
 * Name Generator Hub - Main JavaScript
 * 
 * This file contains shared utility functions and site-wide features
 * that are used across multiple name generators.
 */

// Core site functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar with scroll effects
    initNavbar();
    
    // Add smooth scrolling to all anchor links
    initSmoothScrolling();

    // Add animation classes to elements when they come into view
    initScrollAnimations();
    
    // Initialize FAQ accordion if present on the page
    initFaqAccordion();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize ad display with cookie check
    initAds();
});

/**
 * Initialize responsive navbar with scroll effects
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.createElement('button');
    navbarToggle.className = 'navbar-toggle';
    navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add toggle button for mobile
    if (navbar) {
        navbar.querySelector('.container').appendChild(navbarToggle);
        
        // Toggle mobile menu
        navbarToggle.addEventListener('click', function() {
            const navList = navbar.querySelector('.navbar-nav');
            navList.classList.toggle('active');
            this.innerHTML = navList.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
        
        // Change navbar style on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = navbar.contains(event.target);
            const navList = navbar.querySelector('.navbar-nav');
            
            if (!isClickInsideNavbar && navList.classList.contains('active')) {
                navList.classList.remove('active');
                navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navList = document.querySelector('.navbar-nav');
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    document.querySelector('.navbar-toggle').innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                // Calculate offset based on navbar height
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: offsetTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll-based animations
 */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll(
        '.generator-card, .step, .ad-container, .seo-section, .faq-item'
    );
    
    // Animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    // Observe each element
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add scroll-based parallax to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            const scrollPosition = window.scrollY;
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

/**
 * Initialize FAQ accordion functionality
 */
function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current answer
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

/**
 * Initialize newsletter form with validation
 */
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Simple email validation
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // Success state - would normally submit to server
                emailInput.value = '';
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'newsletter-success';
                successMsg.textContent = 'Thank you for subscribing!';
                
                newsletterForm.parentNode.appendChild(successMsg);
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 3000);
            } else {
                // Error state
                emailInput.classList.add('error');
                
                // Remove error class after a delay
                setTimeout(() => {
                    emailInput.classList.remove('error');
                }, 1500);
            }
        });
    }
}

/**
 * Initialize ad display with cookie-based frequency capping
 */
function initAds() {
    const adContainers = document.querySelectorAll('.ad-container');
    
    // Function to get cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    // Function to set cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }
    
    // Display ads with frequency capping (for demonstration)
    const adDisplayCount = getCookie('adDisplayCount') || 0;
    
    if (adDisplayCount < 5) {
        adContainers.forEach(ad => {
            ad.style.display = 'block';
        });
        
        setCookie('adDisplayCount', parseInt(adDisplayCount) + 1, 1);
    } else {
        // Limit ad displays for returning visitors
        adContainers.forEach((ad, index) => {
            if (index === 0) {
                ad.style.display = 'block'; // Always show the first ad
            } else {
                ad.style.display = 'none';
            }
        });
    }
}

// Utility function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Utility function to get random elements that start with a specific letter
function getElementsStartingWith(array, letter) {
    if (!letter) return array;
    
    letter = letter.toLowerCase();
    return array.filter(item => item.toLowerCase().startsWith(letter));
}

// Utility function to animate the name result display
function animateResult(element) {
    element.classList.remove('animated');
    // Trigger reflow to restart animation
    void element.offsetWidth;
    element.classList.add('animated');
}

// Utility function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Utility function to shuffle an array
function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
