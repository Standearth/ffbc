// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Countdown

// Set the date we're counting down to
var countDownDate = new Date("June 7, 2024 7:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.querySelector(".countdown").innerHTML = "<span>Coming up in </span><div class=\"down\">"+days + "<p>days</p></div><div class=\"down\">"+hours + "<p>hours</p></div><div class=\"down\">"
  //+ minutes + "<p>minutes</p></div><div class=\"down\">" + seconds + "<p>seconds</p></div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    //clearInterval(x);
   // document.getElementById("demo").innerHTML = "The event has already started!";
  }
}, 1000);