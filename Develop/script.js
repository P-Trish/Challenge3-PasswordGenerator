// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var length = prompt ("Please choose a length for password.");
  if (length < 8 || length > 128 || isNaN(length)  ) {
  alert ("Please chooose a number between 8 and 128 characters.");    
  generatePassword(); 
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

