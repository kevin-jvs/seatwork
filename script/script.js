document.addEventListener('DOMContentLoaded', function() {
    const explosionButton = document.getElementById('explosionButton');

    explosionButton.addEventListener('click', function() {
        navigateToPage('2nd_page.html'); // Change this to the page you want to navigate to initially
        createParticle();
    });

    explosionButton2.addEventListener('click', function() {
        navigateToPage('3rd_page.html'); // Change this to the page you want to navigate to initially
        createParticle();
    });

    explosionButton3.addEventListener('click', function() {
        navigateToPage('4th_page.html'); // Change this to the page you want to navigate to initially
        createParticle();
    });

    explosionButton4.addEventListener('click', function() {
        navigateToPage('index.html'); // Change this to the page you want to navigate to initially
        createParticle();
    });

    // Function to create a single particle
    function createParticle() {
        const explosion = document.getElementById('explosion');
        const particle = document.createElement('div');
        particle.classList.add('particle');
        explosion.appendChild(particle);
    }

    // Function to navigate to a specific page
    function navigateToPage(page) {
        window.location.href = page;
    }
});