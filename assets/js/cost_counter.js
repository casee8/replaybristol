var amount        = document.querySelector('#amount'),
    person        = document.querySelector('#person'),
    session       = document.querySelector('#session'),
    pingPong      = document.querySelector('#ping-pong'),
    dateSelected  = document.querySelector('#date-selected'),
    timeSelected  = document.querySelector('#time-selected'),
    firstName     = document.querySelector('#firstName'),
    emailBtn      = document.querySelector('#booking');

var boardGameCost = 2;
var pingPongCost = 3;

var inputGroup = document.querySelectorAll('.inputGroup');
for(var i = 0; i < inputGroup.length; i++){
  inputGroup[i].addEventListener('keyup', costCounter);
}

dateSelected.addEventListener('change', costCounter);
timeSelected.addEventListener('change', costCounter);

function costCounter() {
  amount.innerText = (Number(person.value) * boardGameCost * Number(session.value)) + pingPongCost * Number(pingPong.value);

  var dateArray = dateSelected.value.split('-');
  var shortYear = dateArray[0].slice(2);

  emailBtn.setAttribute("href", "mailto:replaybristol@gmail.com?subject=Booking for: " + firstName.value + " - " + Number(person.value) + " Person; NoS - " + Number(session.value) + "; Ping-Pong - " + Number(pingPong.value) + "; D-T: " + dateArray[2] + "." + dateArray[1] + "." + shortYear + " / " + timeSelected.value);
}