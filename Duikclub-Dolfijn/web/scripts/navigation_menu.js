// Functie om het scrollen te togglen
function toggleScroll() {
    if (document.body.classList.contains('no-scroll')) {
        document.getElementById('menu-overlay').classList.remove('active');
        document.getElementById('menu-icon').classList.remove('active');
        unlockScroll();
    } else {
        document.getElementById('menu-overlay').classList.toggle('active');
        document.getElementById('menu-icon').classList.toggle('active');
        lockScroll();
    }
}

function toggleFilters() {
    if (document.body.classList != 'no-scroll') {
        document.getElementById('filter-menu').classList.add('section-filter-active');
        lockScroll();
    }
}

function closeFilters() {
    document.getElementById('filter-menu').classList.remove('section-filter-active');
    unlockScroll();
}


// Functie om de scrollbar breedte te bepalen
function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

// Functie om scrollen te vergrendelen
function lockScroll() {
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.getElementById('menu-overlay').style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add('no-scroll');
}

// Functie om scrollen te ontgrendelen
function unlockScroll() {
    document.body.style.paddingRight = '';
    document.getElementById('menu-overlay').style.paddingRight = '';
    document.body.classList.remove('no-scroll');
}

//Submenu
function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = document.getElementById('leden-submenu');
    const leden = document.getElementById('leden-wrapper');
    if (submenu) {
        submenu.classList.toggle('active');
        leden.classList.toggle('active');
    }
}