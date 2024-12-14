document.addEventListener('DOMContentLoaded', () => {
    // Smooth fade-in animation for sections on page load
    const sections = document.querySelectorAll('.intro, .features, .mission');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 300); // Delay for staggered animation
    });

    // Smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetSelector = event.target.getAttribute('href');

            // Check if the link points to an ID on the current page
            if (targetSelector && targetSelector.startsWith('#')) {
                event.preventDefault(); // Prevent default only for internal links
                const target = document.querySelector(targetSelector);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Highlight the active navigation link based on scroll position
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const navLink = document.querySelector(
                    `nav ul li a[href="#${entry.target.id}"]`
                );
                if (entry.isIntersecting) {
                    // Add active class to the current link
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    sections.forEach(section => observer.observe(section));

    // Back-to-top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Add hover effect for better accessibility (optional)
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', () => {
            link.style.textDecoration = 'none';
        });
    });
});

