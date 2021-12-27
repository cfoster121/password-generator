// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}


//////////////////////////////////////////////////////////////////





function generatePassword() {

  const pwd = [];

  var chooseLength = prompt("How many characters would you like your password to be? (Must be between 8 and 128)");
  if (chooseLength < 7 || chooseLength > 128) {
    alert("Try again - password must be between 8 and 128 characters");
    return
  }

  var getLowerCase = confirm("Would you like to use lower case letters?");
  var getUpperCase = confirm("Would you like to use upper case letters?");
  var getSymbol = confirm("Would you like to use special characters?");
  var getNumber = confirm("Would you like to use numbers?");

  for (i = 0; i < chooseLength; i++) {

    if (getLowerCase) {
      pwd.push(chooseLowerCase())
    }

    if (pwd.length == chooseLength) {
      return pwd
    }

    if (getUpperCase) {
      pwd.push(chooseUpperCase())
    }

    if (pwd.length == chooseLength) {
      return pwd
    }

    if (getSymbol) {
      pwd.push(chooseSymbol())
    }

    if (pwd.length == chooseLength) {
      return pwd
    }

    if (getNumber) {
      pwd.push(chooseNumber())
    }

    if (pwd.length == chooseLength) {
      return pwd
    }

    console.log(pwd)

  }


};





var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", ";", ":", "(", ")", "{", "}", "[", "]", ",", ".", "<", ">", "/", "?"]

function chooseLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
function chooseUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};
function chooseNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};
function chooseSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}
