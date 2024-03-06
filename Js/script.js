const emailMenu = document.querySelector('.emailMenu');
const menuDesktop = document.querySelector('.menuDesktop');

emailMenu.addEventListener('click', toggleMenuDesktop)

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
}