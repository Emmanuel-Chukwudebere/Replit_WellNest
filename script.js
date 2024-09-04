document.addEventListener('DOMContentLoaded', function() {
    const textSection = document.querySelector('.text-section');
    textSection.style.opacity = '1'; // Trigger the fade-in effect
});

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('menu-toggle');

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
    });

    document.querySelector('.site-header').insertBefore(toggleButton, nav);

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-open');
        }
    });
});
