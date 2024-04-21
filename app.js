'use strict' ; 

var userName = prompt("Enter your Name...")
var userGender = prompt("Enter Your Gender (male/female)...")
var userAge = prompt("Enter Your Age ...");
if (userAge<=0) {
    alert("Age is not valid!");
}
if (confirm("Do you want to skip the welcoming message ?") == false) {
    if (userGender == "male") {
        alert("Hello Mr "+userName)}
    else if (userGender =="female")  {
    alert("Hello Ms "+userName)}
else {
    alert("Hello!")
}
}