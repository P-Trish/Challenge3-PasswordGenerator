// Assignment Code
var length;
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()_+=?";
var numbers = "1234567890";
var userChoice = "";


// Write password to the #password input
function generatePassword () {
  length = prompt ("Please choose a length for password.");
  if (length < 8 || length > 128 || isNaN(length)  ) {
  alert ("Please chooose a number between 8 and 128 characters.");    
  generatePassword(); 
  }

  userPreference();
  var password = "";
  console.log("done");
  return password;
}

function userPreference () {
    var userUpperCase = confirm ("Do you want uppercase letters?");
    if (userUpperCase === true) {
      userChoice += upperCase;
    }
    var userLowerCase = confirm ("Do you want lowercase letters?");
    if (userLowerCase === true) {
      userChoice += lowerCase;
    }
    var userSpecialCharacters = confirm ("Do you want special characters?");
    if (userSpecialCharacters === true) {
      userChoice += specialCharacters;
    }
    var userNumbers = confirm ("Do you want numbers?");
    if (userNumbers === true) {
      userChoice += numbers;
    }
    console.log(userChoice.length);
    console.log("userChoice", userChoice);
    
    if (userChoice.length === 0) {
      alert ("Please make at least one selection");
      userPreference();
    }
}
  
function shufflePassword() {
  var password = "";
  for (var i = 0; i < length; i++) {
    let index = Math.floor(Math.random () *
    userChoice.length);

    password += userChoice[index];
  }
  return password;
}


function writePassword() {
  clearChoices ();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function clearChoices() {
  userChoice = "";

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// PSEUDO-CODE:
// when asked for character types to include in the password, I confirm whether or not to include lowercase, uppercase, numbers, and/or special characters 

// confirm if the user wants lowercase, uppercase, numbers, and/or special characters

// if the user says NO to all of them, then there has to be a promt that says "please choose one option because password needs to be stronger"

// once all prompts are answered a password is generated that matches the selected criteria 
// when the password is generated textContent "password"
// password is display in an alert 
// ability to copy password to clipboard