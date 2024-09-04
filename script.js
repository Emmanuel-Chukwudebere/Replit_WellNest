document.addEventListener('DOMContentLoaded', function() {
    const textSection = document.querySelector('.text-section');
    textSection.style.opacity = '1'; // Trigger the fade-in effect

    const nav = document.querySelector('.main-nav ul');
    const toggleButton = document.querySelector('.menu-toggle'); 

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        toggleButton.classList.toggle('nav-open'); 
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-open');
            toggleButton.classList.remove('nav-open'); // Reset button state
        }
    });
});