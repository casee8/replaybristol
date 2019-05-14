const closeModal = document.querySelectorAll('.close-modal');

// Close Announcement Modal
for(var i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener('click', function(){
    document.querySelector('#modal').style.display = 'none';
  });
}