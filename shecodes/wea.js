function search(event) {
  event.preventDefault();
  alert("searching");
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let dates = new Date();

let hours = dates.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = dates.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let year = dates.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[dates.getDay()];
let date = dates.getDate();
//months

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[dates.getMonth()];

let tes = document.querySelector("#dates");
tes.innerHTML = `${day} ${date}th, ${month} ${year}.`;
let time = document.querySelector("#time");
time.innerHTML = `<strong> ${hours}:${minutes}</strong>`;

function showPosition(position) {
  console.log(position.coords.longitude);
  let att = document.querySelector("h3");
  att.innerHTML = `your longitude is; ${position.coords.longitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let navigate = document.querySelector("button");

Button.addEventListener("click", getCurrentPosition);
