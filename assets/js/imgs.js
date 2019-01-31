function imgFilter(){
  for (var i = 0; i < allImg.length; i++) {
    allImg[i].classList.add('turn-to-normal');
  }
}

setTimeout(imgFilter, 500);