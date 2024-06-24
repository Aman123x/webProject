document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const scrollStep = window.innerWidth;
    const scrollInterval = 3000;
    
    let currentScrollPosition = 0;

    function scrollCarousel() {
        const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;

        if (currentScrollPosition >= maxScrollPosition) {
            currentScrollPosition = 0;
        } else {
            // Otherwise, scroll one step
            currentScrollPosition += scrollStep;
        }

        // Scroll to the new position
        carousel.scrollTo({
            left: currentScrollPosition,
            behavior: 'smooth'
        });
    }

    setInterval(scrollCarousel, scrollInterval);
});
