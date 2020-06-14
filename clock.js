const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-clock-text");

var currentToDoDate = document.getElementById("date");
var currentToDoTime = document.getElementById("time");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getDateAndTime() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  var hours = today.getHours();
  var mins = today.getMinutes();
  var seconds = today.getSeconds();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  stringHours = hours < 10 ? "0" + (hours % 10).toString() : hours.toString();
  stringMins = mins < 10 ? "0" + (mins % 10).toString() : mins.toString();
  stringSeconds = seconds < 10 ? "0" + (seconds % 10).toString() : seconds.toString();


  today = yyyy + "-" + mm + "-" + dd;
  currentTime = stringHours + ":" + stringMins;
  // console.log(today);
  // console.log(currentTime);
  currentToDoDate.value = today;
  currentToDoTime.value = currentTime;
}

// window.onload = function() {
//   getDate();
// };

function init() {
  getTime();
  setInterval(getTime, 1000);
  getDateAndTime();
}

init();
