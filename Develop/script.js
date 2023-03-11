// Assignment Code
var length;
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()_+=?";
var numbers = "1234567890";
var userChoice = "";
var password = "";


// Write password to the #password input
function generatePassword () {
  length = prompt ("Please choose a length for password.");
  if (length < 8 || length > 128 || isNaN(length)  ) {
  alert ("Please chooose a number between 8 and 128 characters.");    
  generatePassword(); 
  }

  userPreference()
  }

  function userPreference () {
    upperCase = confirm ("Do you want uppercase letters?")
    if (upperCase === "yes") {
      userChoice += upperCase;
    }
    lowerCase = confirm ("Do you want lowercase letters?")
    if (lowerCase === "yes") {
      userChoice += lowerCase;
    }
    specialCharacters = confirm ("Do you want special characters?")
    if (specialCharacters === "yes") {
      userChoice += specialCharacters;
    }
    numbers = confirm ("Do you want numbers?")
    if (numbers === "yes") {
      userChoice += numbers;
    }
    if (userChoice.length === 0){
      alert ("Please make at least one selection");
      userPreference();
    }
    }
  



function writePassword() {
  clearChoices ();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function clearChoices() {
  userChoice = "";
  password = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// PSEUDO-CODE:
// when asked for character types to include in the password, I confirm whether or not to include lowercase, uppercase, numbers, and/or special characters 

// confirm if the user wants lowercase, uppercase, numbers, and/or special characters

// if the user says NO to all of them, then there has to be a promt that says "please choose one option because password needs to be stronger"