// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  //Turns pwd array into string of characters to make final password//
  passwordText.value = password.join('');

}

//Function to create password//
function generatePassword() {

  //array containing password letters//
  const pwd = [];

  //Prompts user to choose password b/w 8-128 characters, if outside of range prompt alerts and closes, user will have to click button again to start over//
  var chooseLength = prompt("How many characters would you like your password to be? (Must be between 8 and 128)");
  if (chooseLength < 8 || chooseLength > 128) {
    alert("Try again - password must be between 8 and 128 characters");
    return
  }

  //Asking user to choose if they want to use lower case letters, upper case letters, special characters, and/or numbers//
  var getLowerCase = confirm("Would you like to use lower case letters?");
  var getUpperCase = confirm("Would you like to use upper case letters?");
  var getSpecialChar = confirm("Would you like to use special characters?");
  var getNumber = confirm("Would you like to use numbers?");

  //For loop to generate password letters//
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

    if (getSpecialChar) {
      pwd.push(chooseSpecialChar())
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


//Character options - lower case letters, upper case letters, and numbers refer to UTF-8 charset table values, special characters chosen from given array//
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", ";", ":", "(", ")", "{", "}", "[", "]", ",", ".", "<", ">", "/", "?"]

function chooseLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
function chooseUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};
function chooseNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};
function chooseSpecialChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)]
}
