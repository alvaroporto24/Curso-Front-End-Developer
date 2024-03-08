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

    cerrarPantalla(carrito);
    cerrarPantalla(menuMovil);
}

function toggleMenuMovil() {
    menuMovil.classList.toggle('inactive')

    cerrarPantalla(carrito);
    cerrarPantalla(menuDesktop);
}

function toggleCarrito() {
    carrito.classList.toggle('inactive')

    cerrarPantalla(menuDesktop);
    cerrarPantalla(menuMovil);
}

function cerrarPantalla(pantalla) {
    // si no tiene la clase inactive, ponsela.
    if(!pantalla.classList.contains('inactive')){

        pantalla.classList.add('inactive')
    }
}