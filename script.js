// Assignment code here 
var generateBtn = document.querySelector("#generate");
var lowerLetter = confirm("Do you want lower case letters?")
var upperLetter = confirm("Do you want upper case letters?")
var num = confirm("Do you want numbers?")
var special = confirm("Do you want special characters?")
var passwordLength = confirm("Pick a password length between 8 and 128 characters.")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Writing conditional else/if
if (passwordLength >= 8 && <= 128);{
  function generatePassword() {
    
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
