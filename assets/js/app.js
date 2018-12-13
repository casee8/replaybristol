const menuBtn = document.querySelector('#menuBtn');
const menuContent = document.querySelector('.menu');
const main = document.querySelector('main');
const allImg = document.querySelectorAll('.all-img');

function imgFilter(){
  for (var i = 0; i < allImg.length; i++) {
    allImg[i].classList.add('turn-to-normal');
  }
}

setTimeout(imgFilter, 100);

function toggleMenu(){
  menuContent.classList.toggle('show');
};

menuBtn.addEventListener("click", toggleMenu, false);

// Close the menu from anywhere
function removeShow(){
  menuContent.classList.remove('show');
};

main.addEventListener('click', removeShow, false);


// =================== Image Loading Optimisation ===================
// (() => {
//   if(window.innerWidth > 599) {
//     'use strict';
//     // Page is loaded
//     const objects = document.getElementsByClassName('asyncImage');
//     Array.from(objects).map((item) => {
//       // Start loading image
//       const img = new Image();
//       img.src = item.dataset.src;
//       // Once image is loaded replace the src of the HTML element
//       img.onload = () => {
//         item.classList.remove('asyncImage');
//         return item.nodeName === 'IMG' ? 
//           item.src = item.dataset.src :        
//           item.style.backgroundImage = `url(${item.dataset.src})`;
//       };
//     });
//   }
// })();
// ==================================================================