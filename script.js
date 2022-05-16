// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var userPassword = window.prompt ("Enter a password length");

  if (userPassword => 8) {
    window.alert("Please enter a number between 8 and 128");
    return;
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
