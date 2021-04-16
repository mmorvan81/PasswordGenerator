/*Not sure why the alert does not initially appear to begin the process. Explored diff options
in the button functionality and tried to connect it to the javascript function.

Also could not get rid of the black border around the submit button when clickec....
*/


var numberArray = [
    '0',
    '1',
]
var numbers = "90123456789";
var symbols = "!@#$%^&*()_+?/";
var lowerLetters = "abcdefghijklmnopqrstuv";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwd = '';
var allCharacters = '';

var numbersChoice = false;
var symbolsChoice = false;
var lowerChoice = false;
var upperChoice = false;

document.getElementById("newestpassword").onclick = generate;

function generate() {
    var verifyLength = '';


    while (isNaN(verifyLength) || verifyLength < 10 || verifyLength > 50) {
        verifyLength = prompt("How many characters do you want for you password?(Must be between 10 - 50.)");
        if (verifyLength === null) {
            break;
        }
    }
    if (verifyLength) {
        if (confirm("Will you use numbers?") == true) { numbersChoice = true }
        if (confirm("Will you use characters?") == true) (symbolsChoice = true)
        if (confirm("Will you use lowercase alphabets?") == true) { lowerChoice = true }
        if (confirm("Will you use uppercase alphabets>") == true) { upperChoice = true }
    }

    if (numbersChoice === false && symbolsChoice === false && lowerChoice === false && upperChoice === false) {
        alert("One of each character type must be selected.")
    }



    allCharacters += (numbersChoice ? numbers : '');
    allCharacters += (symbolsChoice ? symbols : '');
    allCharacters += (lowerChoice ? lowerLetters : '');
    allCharacters += (upperChoice ? upperLetters : '');

    pwd = password(verifyLength);
    document.getElementById('password').innerHTML = pwd;

}



function password(length) {
    var psswd = '';
    for (var i = 0; i < length; i++) {
        psswd += allCharacters.charAt(Math.floor(Math.random() * length))
    }
    return psswd;
}

















