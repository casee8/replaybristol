var submit = document.querySelector('#submit');
var amount = document.querySelector('#amount');
var note = document.querySelector('#note');
var boardGameCost = 2;
var pingPongCost = 3;

submit.addEventListener('click', costCounter);

function costCounter() {
  return amount.innerText = (Number(document.querySelector('#person').value) * boardGameCost * Number(document.querySelector('#session').value)) + pingPongCost * Number(document.querySelector('#ping-pong').value);
}