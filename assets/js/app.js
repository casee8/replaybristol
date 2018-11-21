const menuBtn = document.querySelector('#menuBtn');
const menuContent = document.querySelector('.menu');
const navBar = document.querySelector('nav');
const main = document.querySelector('main');

menuBtn.addEventListener('click', function(){
  $(menuContent).toggleClass('show');
});

main.addEventListener('click', function(){
  menuContent.classList.remove('show');
});