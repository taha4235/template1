// Get the countdown elements
var daysCountdown = document.getElementById("days");
var hoursCountdown = document.getElementById("hours");
var minutesCountdown = document.getElementById("minutes");
var secondsCountdown = document.getElementById("seconds");

// Set the end date to be December 31st of the current year
var endDate = new Date(new Date().getFullYear(), 11, 31);

// Update the countdown every second
setInterval(function() {
  // Get the current date
  var now = new Date();
  
  // Calculate the time remaining until the end of the year
  var timeRemaining = endDate - now;
  
  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  // Update the countdown elements with the remaining time
  daysCountdown.innerHTML = days.toString().padStart(2, "0");
  hoursCountdown.innerHTML = hours.toString().padStart(2, "0");
  minutesCountdown.innerHTML = minutes.toString().padStart(2, "0");
  secondsCountdown.innerHTML = seconds.toString().padStart(2, "0");
}, 1000);
