// Assignment Code

var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", generatePassword());

//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button//

// // Write password to the #password input
// function writePassword() {
var password = generatePassword()

function generatePassword() {
    var getLowerCase = confirm("Would you like to use lower case letters?");
if (getLowerCase) {
    passwordLetters = passwordLetters.concat(4)
}
else {
    passwordLetters = 0;
} 

var getUpperCase = confirm("Would you like to use upper case letters?");
if (getUpperCase){
    passwordLetters = passwordLetters.concat(5)
}
else {
    passwordLetters = 0;
} 

var getSymbol = confirm("Would you like to use special characters?");
if (getSymbol) {
    passwordLetters = passwordLetters.concat(6)
}
else {
    passwordLetters = 0;
};




console.log(generatePassword);
console.log(passwordLetters);
console.log(finalPass);

passwordLetters = [];
finalPass = [];

 

var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", ";", ":", "(", ")", "{", "}", "[", "]", ",", ".", "<", ">", "/", "?"]

function chooseLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function chooseUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function chooseNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function chooseSpecialChar() {  
  return symbols[Math.floor(Math.random() * symbols.length)]
};