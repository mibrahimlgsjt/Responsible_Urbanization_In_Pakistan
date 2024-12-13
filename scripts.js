document.addEventListener('DOMContentLoaded', () => {
    // Smooth fade-in animation for sections
    const sections = document.querySelectorAll('.intro, .features, .mission');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 300); // Delay for staggered animation
    });

    // Scroll effect for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
