// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var userPassword = window.prompt ("Enter a password length");

  // if (userPassword => 8 - 128) {
  //   window.alert("Please enter a number between 8 and 128");
  //   return;
  // }

  window.prompt ("Would you like to include lower case characters") 

  window.prompt ("Would you like to include UPPER case characters") 

  window.prompt ("Would you like to include n7m3r1c characters") 

  window.prompt ("Would you like to include s?eci@l characters") 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
