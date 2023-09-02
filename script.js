const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const nav = document.getElementById("nav-menu");

// Toggle and Close Navigation Menu

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.add("show-menu");
    })
}

if (menuClose) {
    menuClose.addEventListener('click', () => {
        nav.classList.remove("show-menu");
    })
}

// Navigation Menu closes by hitting Menu Options

const options = document.querySelectorAll(".nav-menu-links");

function linkAction() {
    nav.classList.remove("show-menu");
}
options.forEach(n => n.addEventListener('click', linkAction));

// Navigation Menu Background enable on scroll

function scrollHeader() {
    const header = document.getElementById("header");

    if (this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}
window.addEventListener('scroll', scrollHeader);

// Scroll Up Animation

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Scroll Reveal

const sr = ScrollReveal({
    distance: '20px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-head, .section-title`, {delay: 600})
sr.reveal(`.home-foot`, {delay: 700})
sr.reveal(`.qoute-title, .home-button`, {delay: 900, origin: 'top'})

sr.reveal(`.form, .footer-logo, .footer-link, .footer-menu, .footer-copyright`, {origin: 'top', interval: 100})
sr.reveal(`.form-button`, {origin: 'top', delay: 900})
sr.reveal(`.event-elements, .event-button, .main-line, .lines, .service-img, .menu-title`, {origin: 'left', interval: 100})
sr.reveal(`.menu-box`, {origin: 'left', interval: 100, delay: 900})
sr.reveal(`.home-img, .menu-img, .event-img, .service-box`, {origin: 'right'})
sr.reveal(``)