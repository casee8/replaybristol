var submit = document.querySelector('#submit');
var amount = document.querySelector('#amount');
var cost = 2;

submit.addEventListener('click', costCounter);

function costCounter() {
  return amount.innerText = "Amount: £" + Number(document.querySelector('#person').value) * cost * Number(document.querySelector('#session').value);
}