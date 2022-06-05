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

  window.confirm ("Would you like to include lower case characters");

  if (window.confirm = true) {
    console.log(lower)
  }

  window.confirm ("Would you like to include UPPER case characters");

  if (true) {
    console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    
  }

  window.confirm ("Would you like to include n7m3r1c characters");

  if (true) {
    console.log("0123456789")
  }

  window.confirm ("Would you like to include s?e(i@l characters"); 

  if (true) {
    console.log("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  }
  
  // if (passwordChar = lower) {
  //   var string = passwordChar.charAt(Math.floor(Math.random() * passwordLength))
    
  // } else {
  //   window.alert("Please choose at least one charcter type")
  //   return }
} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);