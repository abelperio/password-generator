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

  var chars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~$%^&*()_+"]
  console.log(chars);

  var lower = window.confirm ("Would you like to include lower case characters");

  if (lower === true) {
    console.log("abcdefghijklmnopqrstuvwxyz")
  } else {
    chars[0] = null
  }
  
  var upper = window.confirm ("Would you like to include UPPER case characters");

  if (upper === true) {
    console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  } else {
    chars[1] = null
  }

  var num = window.confirm ("Would you like to include n7m3r1c characters");

  if (num === true) {
    console.log("0123456789")
  } else {
    chars[2] = null
  }

 var special = window.confirm ("Would you like to include s?e(i@l characters"); 

 if (special === true) {
  console.log("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~$%^&*()_+")
} else {
  chars[3] = null
}

console.log(chars)
if (chars === [null, null, null, null]){
  console.log("yes")
  window.alert("Please select at least one charater type")
  return
}
 

  // if (passwordChar = lower) {
  //   var string = passwordChar.charAt(Math.floor(Math.random() * passwordLength))
    
  // } else {
  //   window.alert("Please choose at least one character type")
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