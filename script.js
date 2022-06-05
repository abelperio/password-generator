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

  
  var lower = window.confirm ("Would you like to include lower case characters");

  if (lower === true) {
    var stringLower = ("abcdefghijklmnopqrstuvwxyz")
  } else {
    stringLower = ""
  }
  
  var upper = window.confirm ("Would you like to include UPPER case characters");

  if (upper === true) {
    var stringUpper = (stringLower + "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  } else {
    stringUpper = (stringLower)
  }

  var num = window.confirm ("Would you like to include n7m3r1c characters");

  if (num === true) {
    var stringNum = (stringUpper + "0123456789")
  } else {
    stringNum = stringUpper
  }

 var special = window.confirm ("Would you like to include s?e(i@l characters"); 

 if (special === true) {
  var stringSpec = (stringNum + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~$%^&*()_+")
} else {
  stringSpec = stringNum
}
console.log(stringSpec)

if (stringSpec === "") {
  window.alert("Please select at least one charater type")
  return
}

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