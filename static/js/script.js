// ===========================
// Mobile Menu Toggle
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {

    hamburger.addEventListener('click', function () {

        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {

        link.addEventListener('click', function () {

            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

        });

    });

}
// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Form Validation Utilities
// ===========================

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number (10 digits)
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/[^\d]/g, ''));
}

// Validate minimum length
function isValidLength(text, minLength) {
    return text.trim().length >= minLength;
}

// ===========================
// Admission Form Validation (Inline)
// ===========================

const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
    admissionForm.addEventListener('submit', function(e) {
        const form = this;
        let isValid = true;

        // Field validation rules
        const fields = {
            'student_name': {
                minLength: 2,
                validator: (value) => isValidLength(value, 2),
                message: 'Student name must be at least 2 characters'
            },
            'father_name': {
                minLength: 2,
                validator: (value) => isValidLength(value, 2),
                message: 'Father name must be at least 2 characters'
            },
            'class_name': {
                validator: (value) => value !== '',
                message: 'Please select a class'
            },
            'phone_number': {
                validator: (value) => isValidPhone(value),
                message: 'Phone number must be 10 digits'
            },
            'address': {
                minLength: 10,
                validator: (value) => isValidLength(value, 10),
                message: 'Address must be at least 10 characters'
            }
        };

        // Validate each field
        for (const [fieldName, rules] of Object.entries(fields)) {
            const element = document.getElementById(fieldName);
            const errorElement = document.getElementById('error-' + fieldName);
            const value = element.value.trim();

            if (!value) {
                errorElement.textContent = 'This field is required';
                isValid = false;
                element.classList.add('error');
            } else if (!rules.validator(value)) {
                errorElement.textContent = rules.message;
                isValid = false;
                element.classList.add('error');
            } else {
                errorElement.textContent = '';
                element.classList.remove('error');
            }
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    // Remove error on input
    ['student_name', 'father_name', 'class_name', 'phone_number', 'address'].forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('input', function() {
                this.classList.remove('error');
                document.getElementById('error-' + fieldId).textContent = '';
            });
            element.addEventListener('change', function() {
                this.classList.remove('error');
                document.getElementById('error-' + fieldId).textContent = '';
            });
        }
    });
}

// ===========================
// Contact Form Validation
// ===========================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contact_name').value.trim();
        const email = document.getElementById('contact_email').value.trim();
        const subject = document.getElementById('contact_subject').value;
        const message = document.getElementById('contact_message').value.trim();

        // Validation checks
        if (!name) {
            alert('Please enter your name');
            return;
        }

        if (!isValidLength(name, 2)) {
            alert('Name must be at least 2 characters');
            return;
        }

        if (!email) {
            alert('Please enter your email');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const phone = document.getElementById('contact_phone').value.trim();
        if (phone && !isValidPhone(phone)) {
            alert('Phone number must be 10 digits');
            return;
        }

        if (!subject) {
            alert('Please select a subject');
            return;
        }

        if (!message) {
            alert('Please enter your message');
            return;
        }

        if (!isValidLength(message, 10)) {
            alert('Message must be at least 10 characters');
            return;
        }

        // Success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        this.reset();
    });
}

// ===========================
// Scroll Animation
// ===========================

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.querySelectorAll('.card, .facility-card, .class-card, .highlight-card, .info-card, .cta-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===========================
// Navbar Sticky Behavior
// ===========================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-lg)';
        }

        lastScroll = currentScroll;
    });
}

// ===========================
// Utility Functions
// ===========================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

// Add active class to current nav link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ===========================
// Table Sorting (if needed)
// ===========================

function makeSortable(table) {
    const thead = table.querySelector('thead');
    const headers = thead.querySelectorAll('th');

    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            sortTable(table, index);
        });
    });
}

function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const cellA = a.querySelectorAll('td')[columnIndex].textContent.trim();
        const cellB = b.querySelectorAll('td')[columnIndex].textContent.trim();

        // Try to parse as numbers
        const numA = parseFloat(cellA);
        const numB = parseFloat(cellB);

        if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
        }

        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => tbody.appendChild(row));
}

// Initialize sortable tables
document.querySelectorAll('.sortable').forEach(table => {
    makeSortable(table);
});

// ===========================
// Print Functionality
// ===========================

function printPage() {
    window.print();
}

// ===========================
// Accessibility Enhancements
// ===========================

// Add focus styles to buttons
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--light-blue)';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ===========================
// Service Worker (Optional PWA)
// ===========================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/static/js/sw.js');
    });
}

// ===========================
// Page Ready Callback
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    console.log('[v0] School website loaded successfully');
});
