document.querySelector('.menu1').addEventListener('click', toggleMenu);
document.querySelector('.menu6').addEventListener('click', darkMode);
let menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
  for (let i =0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('showitem');
  }
};

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 

console.log(menuItems);