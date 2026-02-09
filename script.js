// Simple interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent.');
            this.reset();
        });
    }
    
    // Current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
