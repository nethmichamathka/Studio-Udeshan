document.addEventListener("DOMContentLoaded", function() {
    // Animation on scroll for the "Welcome" section and "Who We Are" section
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Function to check whether an element is in the viewport
    const handleScrollAnimation = () => {
        elementsToAnimate.forEach((element) => {
            const rect = element.getBoundingClientRect();
            // If the element is within the viewport, add 'visible' class
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('visible');
            } else {
                // Remove the 'visible' class if the element is out of view
                element.classList.remove('visible');
            }
        });
    };

    // Initialize the scroll animation for elements when they appear on the screen
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check in case elements are already in view when the page loads
    handleScrollAnimation();
});
