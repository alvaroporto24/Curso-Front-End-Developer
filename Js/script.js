const emailMenu = document.querySelector('.emailMenu');
const menuDesktop = document.querySelector('.menuDesktop');

const botonMenuMovil = document.querySelector('.botonMenuMovil')
const menuMovil = document.querySelector('.menu-movil')


const botonCarrito = document.querySelector('.carrito')
const carrito = document.querySelector('.cesta')

emailMenu.addEventListener('click', toggleMenuDesktop);
botonMenuMovil.addEventListener('click', toggleMenuMovil);
botonCarrito.addEventListener('click', toggleCarrito);

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
}

function toggleMenuMovil() {
    menuMovil.classList.toggle('inactive')
}

function toggleCarrito() {
    carrito.classList.toggle('inactive')
}