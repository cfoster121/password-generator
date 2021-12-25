// Assignment Code

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword());

// // Write password to the #password input

function writePassword() {

  passwordText.value = password;
  var password = generatePassword()

}

// Add event listener to generate button//
var passwordText = document.querySelector("#password");



var passwordLetters = [];

var passwordText = [];
  
for(var i=0; i<chooseNumber; i++) {
  passwordText = passwordText + passwordLetters[Math.floor((Math.random() * passwordLetters.length))];
  

var chooseNumber = prompt("How many characters would you like your password to be? (Must be between 8 and 156)");
if (chooseNumber > 7 && chooseNumber < 156) {
    passwordLetters = passwordLetters.concat(chooseNumber)
}


function generatePassword() {
    var getLowerCase = confirm("Would you like to use lower case letters?");
if (getLowerCase) {
    passwordLetters = passwordLetters.concat(chooseLowerCase)
}


var getUpperCase = confirm("Would you like to use upper case letters?");
if (getUpperCase){
    passwordLetters = passwordLetters.concat(chooseUpperCase)
}
 

var getSymbol = confirm("Would you like to use special characters?");
if (getSymbol) {
    passwordLetters = passwordLetters.concat(chooseSymbol)
}





console.log(generatePassword);
console.log(passwordLetters);
console.log(finalPass);


 

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
};

