const menuBtn = document.querySelector('#menuBtn');
const menuContent = document.querySelector('.menu');
const main = document.querySelector('main');
const allImg = document.querySelectorAll('.all-img');

function mainApp() {
  function toggleMenu(){
    menuContent.classList.toggle('show');
  };

  menuBtn.addEventListener("click", toggleMenu, false);

  // Close the menu from anywhere
  function removeShow(){
    menuContent.classList.remove('show');
  };

  main.addEventListener('click', removeShow, false);
};

mainApp();