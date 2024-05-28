

// Get user data from sessionStorage
let userName = sessionStorage.getItem("name");
let correct = parseInt(sessionStorage.getItem("score"));
let time = sessionStorage.getItem("time");

// Display user data
document.getElementById("user_name").innerHTML = userName;
document.getElementById("correct").innerHTML = correct;
document.getElementById("user_time").innerHTML = time;

// Calculate attemptWrong
let attemptElement = document.getElementById("attempt").textContent;
let attemptTotal = parseInt(attemptElement);
let attemptWrong = attemptTotal - correct;

// Display attemptWrong
document.getElementById("wrong").innerHTML = attemptWrong;

// Calculate percentage
// let attemptPercent = document.getElementById("percent").textContent;
let percentGot = (correct/10)*100;

// Display percent
document.getElementById("percent").innerHTML = percentGot;
