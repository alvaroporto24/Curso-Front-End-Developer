const emailMenu = document.querySelector('.emailMenu');
const menuDesktop = document.querySelector('.menuDesktop');

const botonMenuMovil = document.querySelector('.botonMenuMovil')
const menuMovil = document.querySelector('.menu-movil')


const botonCarrito = document.querySelector('.carrito')
const carrito = document.querySelector('.cesta')

const cardContainer = document.querySelector('.card-container')
// const productCard = document.querySelector('.product-card');
const productDetail = document.querySelector('.product-detail');
const cerrarProductDetail = document.querySelector('.cerrar');

emailMenu.addEventListener('click', toggleMenuDesktop);
botonMenuMovil.addEventListener('click', toggleMenuMovil);
botonCarrito.addEventListener('click', toggleCarrito);
cardContainer.addEventListener('click', MostrarDetallesProducto);
cerrarProductDetail.addEventListener('click', cerrarDetallesProducto);



function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')

    cerrarPantalla(carrito);
    cerrarPantalla(menuMovil);
    cerrarPantalla(productDetail);

}

function toggleMenuMovil() {
    menuMovil.classList.toggle('inactive')

    cerrarPantalla(carrito);
    cerrarPantalla(menuDesktop);
    cerrarPantalla(productDetail);

}

function toggleCarrito() {
    carrito.classList.toggle('inactive')

    cerrarPantalla(menuDesktop);
    cerrarPantalla(menuMovil);
    cerrarPantalla(productDetail);
}

function MostrarDetallesProducto() {
    productDetail.classList.remove('inactive')

    cerrarPantalla(menuDesktop);
    cerrarPantalla(menuMovil);
    cerrarPantalla(carrito);

}

function cerrarDetallesProducto() {
    productDetail.classList.add('inactive')

}

function cerrarPantalla(pantalla) {
    // si no tiene la clase inactive, ponsela.
    if(!pantalla.classList.contains('inactive')){

        pantalla.classList.add('inactive')
    }
}


let productList = [];
productList.push({
    name: "armario",
    price: 120,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",

})
productList.push({
    name: "armario",
    price: 120,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",

})
productList.push({
    name: "armario",
    price: 120,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",

})
productList.push({
    name: "armario",
    price: 120,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",

})
productList.push({
    name: "armario",
    price: 120,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",

})
productList.push({
    name: "Lampara",
    price: 18,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",
    
})
productList.push({
    name: "Silla",
    price: 22,
    img: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1600",
})

function renderProduct(array) {
    // Ciclo para mostrar todos los productos del array product list
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p')
        productPrice.innerText = product.price + '€';
        const productName = document.createElement('p')
        productName.innerText = product.name; 

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'iconos/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
    
}

renderProduct(productList);