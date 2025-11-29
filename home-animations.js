// home-animations.js - Dynamic Effects for Home Page

document.addEventListener('DOMContentLoaded', function() {
    
    // Scroll animations
    const fadeSections = document.querySelectorAll('.about-section, .trusted-section, .bespoke-section, .process-section, .projects-section, .testimonial-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeSections.forEach(section => observer.observe(section));
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Create floating particles
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 20 + 5;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 15;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            container.appendChild(particle);
        }
    }
    
    // Typing animation for hero text
    function initTypingAnimation() {
        const texts = [
            "Bespoke Furniture for Hotels and Restaurants",
            "Luxury Furniture for Hospitality",
            "Custom Designs for Commercial Spaces"
        ];
        
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';
        const typingElement = document.querySelector('.typing-text');
        
        if (!typingElement) return;
        
        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            
            typingElement.textContent = letter;
            
            if (letter.length === currentText.length) {
                setTimeout(() => {
                    index = 0;
                    count++;
                    setTimeout(type, 1000);
                }, 3000);
            } else {
                setTimeout(type, 100);
            }
        }
        
        // Start typing animation
        type();
    }
    
    // Enhanced logo hover effects
    function enhanceLogos() {
        const logos = document.querySelectorAll('.logo-row img');
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.08)';
                this.style.transition = 'all 0.3s ease';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Initialize all animations
    createParticles();
    initTypingAnimation();
    enhanceLogos();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});