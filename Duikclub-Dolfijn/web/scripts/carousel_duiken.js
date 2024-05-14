document.addEventListener("DOMContentLoaded", function() {
    const rotateLinks = document.querySelectorAll('.rotate-link');
    const bannerWrapper = document.querySelectorAll('.duiken-wrapper');

    rotateLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-content');
            bannerWrapper.forEach(content => {
                content.classList.add('hidden');
            });
            const contentElement = document.getElementById(contentId);
            if (contentElement) {
                contentElement.classList.remove('hidden');
            }
        });
    });
});