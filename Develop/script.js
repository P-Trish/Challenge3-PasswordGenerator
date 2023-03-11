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
    upperCase = confirm ("Do you want Uppercase letters?")
    if (upperCase === "yes") {

    }
  }


// CONFIRMS for upper/lower case and/or special characters 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// PSEUDO-CODE:
// when asked for character types to include in the password, I confirm whether or not to include lowercase, uppercase, numbers, and/or special characters 

// confirm lowercase
// confirm uppercase
// confirm numbers
// confirm special characters 