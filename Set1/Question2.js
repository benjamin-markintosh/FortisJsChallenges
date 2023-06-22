/*

2. WriteaJavaScriptprogramthat
promptsausertoentertheiryearof birth
 and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder. 
 Anyone below 18 years is a minor,
anyone between 18 
and 
36 years is a youth
 and the rest are elders.

*/

const yearOfBirth = prompt("Enter your year of Birth: ");

const today = new Date();
const year = today.getFullYear();

const userAge = year - parseInt(yearOfBirth);

if (userAge < 18) {
  console.log("Minor");
} else if (userAge >= 18 && userAge <= 36) {
  console.log("Youth");
} else {
  console.log("Elder");
}
