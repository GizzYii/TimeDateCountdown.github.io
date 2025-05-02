// Set the target date to June 30, 2025 at 00:00:00 and convert it to milliseconds
var countDownDate = new Date ("5 Dec, 2025 00:00:00").getTime();

// This function will run every second
var x = setInterval(function(){
  
// Get the current time in milliseconds
  var now = new Date().getTime();
  
// Calculate the remaining time until the target date
  var distance = countDownDate - now;

  // Calculate the remaining days,hours,second,minutes
  var days = Math.floor(distance / (1000* 60* 60* 24));
  var hours = Math.floor((distance % (1000* 60* 60* 24)) / (1000* 60* 60));
  var minute = Math.floor((distance % (1000* 60* 60)) / (1000*60));
  var seconds = Math.floor((distance % (1000* 60)) / 1000);
  
  // Display the remaining time in the HTML elements with ids "days", "hours", "minute", and "seconds"
  document.getElementById("days").innerHTML = days ; 
  document.getElementById("hours").innerHTML = hours ;        
  document.getElementById("minute").innerHTML = minute ; 
  document.getElementById("seconds").innerHTML = seconds ; 

  // If the countdown has finished 0
if (distance <0) {
  clearInterval(x);
  document.getElementById("days").innerHTML = "00" ; 
  document.getElementById("hours").innerHTML = "00" ;        
  document.getElementById("minute").innerHTML = "00" ; 
  document.getElementById("seconds").innerHTML = "00" ; 

}



},1000);//This function runs every 1000 milliseconds (every second)
