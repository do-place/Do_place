document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of a simple interaction (e.g., alert on CTA click)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Thank you for your interest! We will get in touch soon.');
        });
    }

    // You could also dynamically add the "nano banana" image here
    const heroImageContainer = document.querySelector('.hero-image');
    if (heroImageContainer && !heroImageContainer.querySelector('img')) {
        const img = document.createElement('img');
        img.src = 'https://picsum.photos/700/350?random=1'; // Using Lorem Picsum for a random placeholder image
        img.alt = 'A placeholder image representing do.place concept';
        heroImageContainer.innerHTML = ''; // Clear any placeholder text
        heroImageContainer.appendChild(img);
    }
});
