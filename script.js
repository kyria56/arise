// Loading Screen
const loadingScreen = document.getElementById('loading-screen');
const body = document.body;
const progressFill = document.querySelector('.loading-progress-fill');
const percentageText = document.querySelector('.loading-percentage');

if (loadingScreen) {
    body.classList.add('loading');
    
    // Animate percentage counter
    let progress = 0;
    const updateProgress = () => {
        if (progress < 100) {
            progress += Math.random() * 3 + 1;
            if (progress > 100) progress = 100;
            if (percentageText) {
                percentageText.textContent = Math.floor(progress) + '%';
            }
            requestAnimationFrame(updateProgress);
        }
    };
    
    // Start progress animation after a short delay
    setTimeout(() => {
        updateProgress();
    }, 500);
    
    // Hide loading screen after page loads and minimum time
    window.addEventListener('load', function() {
        // Ensure minimum display time of 4.5 seconds
        const minDisplayTime = 4500;
        const startTime = Date.now();
        
        setTimeout(function() {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, minDisplayTime - elapsed);
            
            setTimeout(function() {
                loadingScreen.classList.add('hidden');
                body.classList.remove('loading');
                // Remove from DOM after transition
                setTimeout(function() {
                    loadingScreen.remove();
                }, 800);
            }, remaining);
        }, 0);
    });
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Registration Form Handling
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // In a real implementation, you would send this to a server
        // For now, we'll just show an alert
        console.log('Registration submitted:', data);
        alert('Thank you for your registration! We will contact you soon to confirm your enrollment.');
        
        // Reset form
        this.reset();
    });
}

