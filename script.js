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

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'CrCsMkcfiUOEQhyj2';           // Your EmailJS Public Key
const EMAILJS_SERVICE_ID = 'service_38lcdik';             // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_k041adj';          // Your EmailJS Template ID

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Registration Form Handling
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const firstName = formData.get('first-name');
        const lastName = formData.get('last-name');
        const email = formData.get('parent-email');
        const phone = formData.get('parent-phone');
        const program = formData.get('program-interest');
        
        // Combine first and last name
        const fullName = `${firstName} ${lastName}`;
        
        // Get program name from option value
        const programNames = {
            'kids': 'Kids Taekwondo (Ages 7-11)',
            'teens': 'Teens Taekwondo (Ages 12-17)',
            'adult': 'Adults Taekwondo (Ages 18+)',
            'competition': 'Competition Team (Ages 7+)'
        };
        const programName = programNames[program] || program;
        
        // Prepare email template parameters
        const templateParams = {
            to_email: 'arisechampiontkd@gmail.com',
            from_name: fullName,
            from_email: email,
            phone: phone,
            program: programName,
            message: `New registration from ${fullName}\n\nEmail: ${email}\nPhone: ${phone}\nProgram: ${programName}`
        };
        
        // Send email via EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function(response) {
                // Success
                console.log('Email sent successfully!', response.status, response.text);
                alert('Thank you for your registration! We will contact you soon to confirm your enrollment.');
                
                // Reset form
                registrationForm.reset();
            }, function(error) {
                // Error
                console.error('Email sending failed:', error);
                alert('Sorry, there was an error sending your registration. Please try again or contact us directly at arisechampiontkd@gmail.com');
            });
    });
}

