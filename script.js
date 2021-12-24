// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword(){;
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

document.getElementById("generate").addEventListener("click", prompts() {
};

function generatePassword() {
}




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
}



 console.log(chooseSpecialChar());


// Add event listener to generate button






// }