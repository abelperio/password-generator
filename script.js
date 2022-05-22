// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var passwordLength = window.prompt ("Enter a password length");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)

  } else {
    window.alert("Please enter a value between 8 and 128")
    return;
  }

  // var passwordChars = window.confirm ("Would you like to include lower case characters");

  // if 

  // window.confirm ("Would you like to include UPPER case characters");

  // window.confrim ("Would you like to include n7m3r1c characters");

  // window.confirm ("Would you like to include s?e(i@l characters"); 


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
