var submit = document.querySelector('#submit');
var amount = document.querySelector('#amount');
var note = document.querySelector('#note');
var cost = 2;

submit.addEventListener('click', costCounter);

function costCounter() {
  note.classList.remove('hidden');
  return amount.innerText = "Amount: £" + Number(document.querySelector('#person').value) * cost * Number(document.querySelector('#session').value);
}