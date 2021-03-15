const hamburger_toggler = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav-menu')
const close_nav_menu = document.querySelector('.close-nav-menu');

hamburger_toggler.addEventListener('click', function() {
    nav_menu.classList.toggle('nav-menu-open');
    hamburger_toggler.classList.toggle('hamburger-open');
    close_nav_menu.classList.toggle('open-nav-menu');
})


close_nav_menu.addEventListener('click', function() {
    nav_menu.classList.toggle('nav-menu-open');
    hamburger_toggler.classList.toggle('hamburger-open');
    close_nav_menu.classList.toggle('open-nav-menu');
})