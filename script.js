document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const closeIcon = document.getElementById('close');
    const menuPanel = document.querySelector('.menu_panel');

    // Function to show the menu panel and hide the menu icon
    function showMenuPanel() {
      menuPanel.classList.add('active');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }

    // Function to hide the menu panel and show the menu icon
    function hideMenuPanel() {
      menuPanel.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }

    // Add event listeners
    menuIcon.addEventListener('click', showMenuPanel);
    closeIcon.addEventListener('click', hideMenuPanel);
  });



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


