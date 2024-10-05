// Optional: If you have a button to trigger service items' animations
document.addEventListener('DOMContentLoaded', () => {
    // Select all service items
    const serviceItems = document.querySelectorAll('.service-item');

    // Apply animation delay based on the item's index
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Scroll-to-Top Button Functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Show or hide button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll smoothly to the top when the button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.querySelector('header nav ul');

    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the active class for mobile navigation
    });
});
