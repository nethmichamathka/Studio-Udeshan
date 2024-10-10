document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Trigger the animation
            } else {
                entry.target.classList.remove('visible');  // Reset animation
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);  // Observe all sections with animate-on-scroll class
    });
});
