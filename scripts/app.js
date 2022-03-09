document.querySelector('.menu1').addEventListener('click', toggleMenu);
let menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
  for (let i =0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('show');
  }
};

console.log(menuItems);