// Assignment code here 
var generateBtn = document.querySelector("#generate");
var lowerLetter = confirm("Do you want lower case letters?")
var upperLetter = confirm("Do you want upper case letters?")
var num = confirm("Do you want numbers?")
var spChar = confirm("Do you want special characters?")
var passwordLength = confirm("Pick a password length between 8 and 128 characters.")
var userPL = parseInt(passwordLength)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Writing conditional else/if
if (userPL >= 8 && userPL <= 128){
  function generatePassword() {
    var undefinedString = "";
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    var numbers = '0123456789';

    if (lowerLetter === true) {
      undefinedString += lowercase
    };

    if (upperLetter === true) {
      undefinedString += uppercase
    };

    if (num === true) {
      undefinedString += numbers
    };
    
    if (spChar === true) {
      undefinedString += symbols
    };

    var password = "";
    for (var i = 0; i < password; i++) {
      password +=  
    }
  
    console.log(password)
    return password;
  }
}
    else {
      console.log("too few or too many characters.")
      alert("Password must be between 8 and 128 characters.");
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
