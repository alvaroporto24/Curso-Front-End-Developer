const emailMenu = document.querySelector('.emailMenu');
const menuDesktop = document.querySelector('.menuDesktop');

const botonMenuMovil = document.querySelector('.botonMenuMovil')
const menuMovil = document.querySelector('.menu-movil')

emailMenu.addEventListener('click', toggleMenuDesktop);
botonMenuMovil.addEventListener('click', toggleMenuMovil);

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
}

function toggleMenuMovil() {
    menuMovil.classList.toggle('inactive')
}