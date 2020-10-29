// Store all the neccessary elements
var amount = document.querySelector("#amount"),
  person = document.querySelector("#person"),
  session = document.querySelector("#session"),
  pingPong = document.querySelector("#ping-pong"),
  dateSelected = document.querySelector("#date-selected"),
  timeSelected = document.querySelector("#time-selected"),
  pNum = document.querySelector("#pNum"),
  checkB = document.querySelector("#checkB"),
  firstName = document.querySelector("#firstName"),
  emailBtn = document.querySelector("#booking"),
  closeModal = document.querySelectorAll(".close-modal"),
  modal = document.querySelector("#modal"),
  inputGroup = document.querySelectorAll(".inputGroup");
  yesOrNo = "";
  
  // Declare the costs
  var boardGameCost = 3,
  pingPongCost = 3;

// Listen to changes an all input fields
for (var i = 0; i < inputGroup.length; i++) {
  inputGroup[i].addEventListener("keyup", callTgthr);
}

dateSelected.addEventListener("change", callTgthr);
timeSelected.addEventListener("change", costCounter);
checkB.addEventListener("change", yON);

function callTgthr() {
  checkDate();
  costCounter();
}

// Check the selected date (for free Ping-Pong) + modal
function checkDate() {
  var d = new Date(dateSelected.value);
  var freeDays = [1, 2, 3, 4];

  for (var i = 0; i < freeDays.length; i++) {
    if (d.getDay() == freeDays[i]) {
      pingPong.classList.add("free");
      if (pingPong.value !== "") {
        modal.style.display = "block";
      }
      pingPong.value = "";
      break;
    } else {
      pingPong.classList.remove("free");
    }
  }
}

// Close warning Modal
for (var i = 0; i < closeModal.length; i++) {
  closeModal[i].addEventListener("click", function () {
    document.querySelector("#modal").style.display = "none";
  });
}

// Check if the user checked the checkbox
function yON() {
  if (checkB.checked) {
    yesOrNo = "Y";
    costCounter();
  } else {
    yesOrNo = "N";
    costCounter();
  }
}

// Calculate the cost and make email subject
function costCounter() {
  amount.innerText =
    Number(person.value) * boardGameCost * Number(session.value) +
    pingPongCost * Number(pingPong.value);

  var dateArray = dateSelected.value.split("-");
  var shortYear = dateArray[0].slice(2);

  emailBtn.setAttribute(
    "href",
    "mailto:replaybristol@gmail.com?subject=Booking for: " +
      firstName.value +
      " - " +
      pNum.value +
      " - " +
      yesOrNo +
      " / " +
      Number(person.value) +
      " Person / " +
      Number(session.value) +
      " - Session / " +
      Number(pingPong.value) +
      " - Ping-Pong / D: " +
      dateArray[2] +
      "." +
      dateArray[1] +
      "." +
      shortYear +
      " / T: " +
      timeSelected.value
  );
}
