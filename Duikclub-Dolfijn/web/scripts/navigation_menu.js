function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuOverlay = document.getElementById('menu-overlay');

    document.body.classList.toggle('no-scroll');
    menuIcon.classList.toggle('active');

    menuOverlay.style.display = (menuOverlay.style.display === 'block') ? 'none' : 'block';
}