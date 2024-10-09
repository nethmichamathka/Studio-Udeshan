document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect for the welcome message in the hero section
    const welcomeMessage = document.querySelector('.welcome-message');

    // Wait for the content to load and then apply the fade-in effect
    if (welcomeMessage) {
        setTimeout(function() {
            welcomeMessage.classList.add('fade-in');
        }, 300); // Delay to make sure everything is loaded before animation starts
    }

    // Animation for Service Items
    const serviceItems = document.querySelectorAll('.service-item');

    // Fade-in effect when the service items come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    serviceItems.forEach(item => {
        observer.observe(item);
    });

    // Smooth Scroll for the "Explore Our Services" button in the hero section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault();

            // Scroll to Services Section
            const servicesSection = document.querySelector('.services');
            if (servicesSection) {
                servicesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    }

    // Scroll to top functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    // Show the scroll-to-top button when scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Smooth Scroll to Top
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
