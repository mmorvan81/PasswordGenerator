
//Generate password steps
//click on generate password button
//pop up window: choose length of characters - click ok
//pop up window: choose asks for character types - click ok
//input should be validated
//then password is generated
//passwood displays and an alert or message on page
//Variables to identify prompts
var passwordLength = [];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var computerChoice;
var needUpper;
var needLower;
var needSpecial;
var needNumber;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    passwordlength = window.prompt("How many characters will you choose for your password?");
    

if (!passwordLength){
    window.alert("Password must be between 8 to 128 characters.");
}
else if (passwordLength < 8 || passwordLength > 128)window.alert ("The password must be between 8 and 128 characters");

var needUpper = confirm("Would you like upper case characters?");
var needLower = confirm("Would you like lower case characters?");
var needSpecial = confirm("Would you like special characters?");
var needNumber = confirm("Would you like numeric characters?");
}
if (!needUpper && !needLower && !needSpecial && !needNumber) {
    computerChoice = upperCase.concat(upperCase, lowerCase, specialCharacters, numbers);
} 
else if (needUpper && needLower && needSpecial && needNumber) {
    computerChoice = upperCase.concat(lowerCase, specialCharacters, numbers);
}
else if (needUpper && needLower && needSpecial) {
    computerChoice = upperCase.concat(lowerCase, specialCharacters);
}
else if (needUpper && needLower && needNumber) {
    computerChoice = upperCase.concat(lowerCase, numbers);
}
else if (needUpper && needLower && needNumber) {
    computerChoice = upperCase.concat(lowerCase, numbers);
}
else if (needUpper && needLower && needNumber) {
    computerChoice = upperCase.concat(lowerCase, specialCharacters);
}
else if (needUpper && needLower) {
    computerChoice = upperCase.concat(lowerCase);
}
else if (needUpper && needSpecial) {
    computerChoice = upperCase.concat(specialCharacters);
}
else if (needUpper && needNumber) {
    computerChoice = upperCase.concat(numbers);
}
else if (needUpper && needLSpecial) {
    computerChoice = upperCase.concat(specialCharacters);
}
else if (needUpper && needNumber) {
    computerChoice = upperCase.concat(numbers);
}
else if (needUpper && needNumber) {
    computerChoice = upperCase.concat(numbers);
}
else if (needUpper) {
    computerChoice = upperCase;
}
else if (needLower) {
    computerChoice = ulowerCase;
}
else if (needSpecial) {
    computerChoice = specialCharacters;
}
else if (needNumber) {
    computerChoice = numbers;
};

