(function() {
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
})();