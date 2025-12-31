// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLLING ====================
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== FORM SUBMISSION ====================
function handleSubmit() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const loanType = document.getElementById('loanType').value;
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    if (!name || !email || !phone) {
        alert('Please fill in all required fields (Name, Email, Phone)');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    
    // Hide success message after 4 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);

    // Log form data (in production, this would be sent to a backend server)
    console.log('Application Submitted:', {
        name: name,
        email: email,
        phone: phone,
        loanType: loanType,
        message: message,
        timestamp: new Date().toISOString()
    });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
    document.getElementById('loanType').value = 'personal';

    // You can also send data to a backend server like this:
    /*
    fetch('https://your-backend-api.com/submit-application', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            loanType: loanType,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Show success message
        successMessage.classList.add('show');
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 4000);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your application. Please try again.');
    });
    */
}

// ==================== HEADER SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(30, 60, 114, 1)';
    } else {
        header.style.background = 'rgba(30, 60, 114, 0.95)';
    }
});

// ==================== SCROLL ANIMATIONS ====================
// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply scroll animations to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .step-card, .feature-item, .testimonial-card, .stat-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== CLOSE MOBILE MENU ON OUTSIDE CLICK ====================
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// ==================== FORM INPUT VALIDATION ====================
// Real-time email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            emailInput.style.borderColor = '#dc3545';
        } else {
            emailInput.style.borderColor = '#e0e0e0';
        }
    });
}

// Real-time phone validation (basic)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Allow only numbers, spaces, +, and -
        e.target.value = e.target.value.replace(/[^0-9+\s-]/g, '');
    });
}

// ==================== STATS COUNTER ANIMATION ====================
// Animate counting numbers when stats section is in view
const statsSection = document.querySelector('.stats');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounters();
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isCurrency = target.includes('₵');
        const isTime = target.includes('hrs');
        const isPlus = target.includes('+');
        
        // Extract numeric value
        let numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (!numericValue) return;
        
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            
            // Format based on original format
            if (isCurrency) {
                if (displayValue >= 1000000) {
                    displayValue = `₵${Math.floor(displayValue / 1000000)}M`;
                } else {
                    displayValue = `₵${displayValue}`;
                }
            } else if (isPercentage) {
                displayValue = `${displayValue}%`;
            } else if (isTime) {
                displayValue = `${displayValue}hrs`;
            } else if (isPlus) {
                displayValue = `${displayValue}+`;
            }
            
            counter.textContent = displayValue;
        }, duration / steps);
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c🏦 Express Capital Microfinance', 'color: #1e3c72; font-size: 20px; font-weight: bold;');
console.log('%cWebsite developed with ❤️', 'color: #2a5298; font-size: 14px;');
console.log('%cFor business inquiries: info@expresscapital.com', 'color: #666; font-size: 12px;');