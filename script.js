// Identified the variables
var uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = uppercase.toLowerCase();
var special = "!@#$%^&*?-";
var numbers = "1234567890";
var password = '';
 
var genBtn = document.querySelector("#gen");
var textarea = document.querySelector("#textarea");
  
function generatePassword() {

 //Questions for the user in the pop-ups
 var userSpecial = confirm("Would you like your password to create special characters?");
 var userNumber = confirm("Would you like your password to include numbers?");
 var userUCase = confirm("Would you like to include uppercase letters?");
 var userLCase = confirm("Would you like to include lowercase letters?")

 //Utilizing the var for true and false statements
 var userUCaseTrue = userUCase === true;
 var userUCaseFalse = userUCase === false;
 var userLCaseTrue = userLCase === true;
 var userLCaseFalse = userLCase === false;
 var userSpecialTrue = userSpecial === true;
 var userSpecialFalse = userSpecial === false;
 var userNumberTrue = userNumber === true;
 var userNumberFalse = userNumber === false;

 if (userSpecialFalse && userNumberFalse && userUCaseFalse && userLCaseFalse) {
            alert("You must include at least one option");
            return;
 }
 else {
    var userLength = prompt("Enter a number from 8 - 128 to set the length of your password");
 }

 if (!isNumber(userLength)){
        alert("Please enter a number from 8 - 128");
        userLength = prompt("Enter a number from 8 - 128 to set the length of your password");
    }

 if (userLength < 8 || userLength > 128) {
    alert("Please enter a number between 8 - 128");
 }
 else {

        if (userSpecialTrue && userNumberTrue && userUCaseTrue && userLCaseTrue) {
            var charSet = special + numbers + uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

        if (userSpecialFalse && userNumberTrue && userUCaseTrue && userLCaseTrue) {
            var charSet = numbers + uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

        if (userSpecialFalse && userNumberFalse && userUCaseTrue && userLCaseTrue) {
            var charSet = uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

        if (userSpecialFalse && userNumberFalse && userUCaseFalse && userLCaseTrue) {
            var charSet = lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberFalse && userUCaseTrue && userLCaseTrue) {
            var charSet = special + uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberTrue && userUCaseFalse && userLCaseTrue) {
            var charSet = special + numbers + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberTrue && userUCaseTrue && userLCaseFalse) {
            var charSet = special + numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberTrue && userUCaseFalse && userLCaseFalse) {
            var charSet = special + numbers;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberFalse && userUCaseFalse && userLCaseTrue) {
            var charSet = special + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberTrue && userUCaseTrue && userLCaseFalse) {
            var charSet = special + numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialTrue && userNumberFalse&& userUCaseFalse && userLCaseFalse) {
            var charSet = special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialFalse && userNumberTrue && userUCaseTrue && userLCaseFalse) {
            var charSet = numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialFalse && userNumberTrue && userUCaseFalse && userLCaseTrue) {
            var charSet = special + numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        if (userSpecialFalse && userNumberTrue && userUCaseFalse && userLCaseFalse) {
            var charSet =  numbers;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
    }
}

//The event listeners for the buttons
genBtn.addEventListener("click", generatePassword);
document.querySelector("#copy").addEventListener("click", copy);

function isNumber(value) {
    var numberPattern = /^[0-9]+$/;
    return numberPattern.test(value);
}

