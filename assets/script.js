// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var character = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var confirmArray = [];
var passwordChoice = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = parseInt(prompt("Choose a password between 8-128 characters"));
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 long")

    passwordLength = parseInt(prompt("Choose a password between 8-128 characters"));
  }

  while (passwordChoice.length === 0) {
    alert("Please select at least one choice.")
    var confirmnumb = confirm("Would you like your password to contain numbers?");

    var confirmlowerCase = confirm("Would you like your password to contain lowercase letters?");

    var confirmupperCase = confirm("Would you like your password to contain uppercase letters?");

    var confirmcharacter = confirm("Would you like your password to contain special characters?");

    if (confirmnumb) {
      passwordChoice.push(numb)
    }

    if (confirmlowerCase) {
      passwordChoice.push(lowerCase)
    }

    if (confirmupperCase) {
      passwordChoice.push(upperCase)
    }

    if (confirmcharacter) {
      passwordChoice.push(character)
    }
    console.log(passwordChoice)
  }

  var password = []

  for (var i = 0; i < passwordLength; i++) {
    console.log(i)

    var typeIndex  = Math.floor(Math.random() * passwordChoice.length)
    var charIndex = Math.floor(Math.random() * passwordChoice[typeIndex].length)
    var actualCharacter = passwordChoice[typeIndex][charIndex]
    
    password.push(actualCharacter)
    
  }
  return password.join("")
}