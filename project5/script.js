// gsap.to("#mainc",{
//     x:500,
//     duration:2,
//     delay:1,
//     rotate:360,
//     borderRadius:"80%",
//     backgroundColor: "blue",
//     y:300,
//     repeat:1,
//     yoyo:true,
    
// })
// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// setInterval(() =>{
//     let currtime = new Date();
//     hrs.innerHTML = (currtime.getHours()<10?"0":"")+currtime.getHours();
//     min.innerHTML = (currtime.getMinutes()<10 ? "0":"")+currtime.getMinutes();
//     sec.innerHTML = (currtime.getSeconds()<10?"0" :"")+currtime.getSeconds();
// },1000);
//................................................................................
gsap.to("#mainc", {
    x: 500,
    duration: 3,
    delay: 2,
    rotate: 720,
    borderRadius: "70%",
    backgroundColor: "blue",
    y: -30,
    repeat: 1,
    yoyo: true,
    stagger:1
});


// Variables for the time display
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


// Initial format set to 24-hour
let is24HourFormat = true;

// Function to format time in 12-hour format (no AM/PM)
function formatTime12(hour) {
    hour = hour % 12; // Convert to 12-hour format
    if (hour === 0) hour = 12; // Handle midnight (0 becomes 12)
    return hour; // Just return the hour in 12-hour format
}

// Function to update the clock
setInterval(() => {
    let currtime = new Date();
    let hours = currtime.getHours();
    let minutes = currtime.getMinutes();
    let seconds = currtime.getSeconds();

    // Add leading zeros if necessary
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the time in 24-hour or 12-hour format based on the `is24HourFormat` flag
    if (is24HourFormat) {
        hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
        min.innerHTML = formattedMinutes;
        sec.innerHTML = formattedSeconds;
    } else {
        hrs.innerHTML = formatTime12(hours); // 12-hour format (no AM/PM)
        min.innerHTML = formattedMinutes;
        sec.innerHTML = formattedSeconds;
    }
}, 1000);

// Toggle between 24-hour and 12-hour format when the button is clicked
document.getElementById("toggleFormat").addEventListener("click", function() {
    is24HourFormat = !is24HourFormat; // Toggle the format
    // Change the button text based on the current format
    if (is24HourFormat) {
        this.innerHTML = "Switch to 12-Hour Format";
    } else {
        this.innerHTML = "Switch to 24-Hour Format";
    }
});
//.............................................................................
