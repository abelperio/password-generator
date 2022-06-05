// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // using pop up with text input ability
  var passwordLength = window.prompt ("Enter a password length");

  // accepting only inputs between 8 and 128 and providing alert message
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)

  } else {
    window.alert("Please enter a value between 8 and 128")
    return;
  }

  // confirming the use of lower case characters
  var lower = window.confirm ("Would you like to include lower case characters");

  // defining string to either have or exclude lower case characters
  if (lower === true) {
    var stringLower = ("abcdefghijklmnopqrstuvwxyz")
  } else {
    stringLower = ""
  }
  
  // confirming the use of upper case characters
  var upper = window.confirm ("Would you like to include UPPER case characters");

  // defining string to either have or exclude upper case characters
  if (upper === true) {
    var stringUpper = (stringLower + "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  } else {
    stringUpper = (stringLower)
  }

  // confirming the use of numerical characters
  var num = window.confirm ("Would you like to include n7m3r1c characters");

  // defining string to either have or exclude numerical characters
  if (num === true) {
    var stringNum = (stringUpper + "0123456789")
  } else {
    stringNum = stringUpper
  }

  // confirming the use of special characters
  var special = window.confirm ("Would you like to include s?e(i@l characters"); 

  // defining string to either have or exclude special characters
  if (special === true) {
  var stringSpec = (stringNum + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~$%^&*()_+")
  } else {
  stringSpec = stringNum
}
console.log(stringSpec)

// if no character types have been selected, alert user and return undefined
if (stringSpec === "") {
  window.alert("Please select at least one charater type")
  return
}

// using string and length defined previously, a random password is generated using this for loop
var result = '';
for ( var i = 0; i < passwordLength; i++ ) {
  result += stringSpec.charAt(Math.floor(Math.random() * 
passwordLength));
}
return result;
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);