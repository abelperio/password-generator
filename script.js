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

  var passwordChar = window.confirm ("Would you like to include lower case characters");

  if (true) {
    console.log("lower")
  }

  window.confirm ("Would you like to include UPPER case characters");

  if (true) {
    console.log("upper")
  }

  window.confirm ("Would you like to include n7m3r1c characters");

  if (true) {
    console.log("num")
  }

  window.confirm ("Would you like to include s?e(i@l characters"); 

  if (true) {
    console.log("special")
  }

  // var string (int, passwordLength)
  // console.log (string)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
