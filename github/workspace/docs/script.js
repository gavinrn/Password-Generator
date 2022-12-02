// Assignment code here

var upperCase = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];
var lowerCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
var number = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var specialChar = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")"];

var passArray = [];
var pass = [];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var userInput = prompt("Enter a password length between 8 and 128");

    if (userInput === null) {
        alert("Not a valid number");
        return generatePassword();
    }
    if (userInput < 8 || userInput > 128) {
        alert("Not a valid number");
        return generatePassword();
    }

    var includeUpperCase = confirm(
        "Would you like to include an uppercase letter in your password?"
    );

    var includeLowerCase = confirm(
        "Would you like to include a lowercase letter in your password?"
    );

    var includeNumber = confirm(
        "Would you like to include a number in your password?"
    );

    var includeSpecial = confirm(
        "Would you like to include a special charceter"
    );

    if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecial){
        alert("You must choose a type.");
        return generatePassword();
    }

    if (includeUpperCase) {
        passArray = passArray.concat(upperCase);
    }

    if (includeLowerCase) {
        passArray = passArray.concat(lowerCase);
    }

    if (includeNumber) {
        passArray = passArray.concat(number);
    }

    if (includeSpecial) {
        passArray = passArray.concat(specialChar);
    }

    for (let i = 0; i < userInput; i++) {
        var random = passArray[Math.floor(Math.random() * passArray.length)];
        pass.push(random);

    }
    return pass.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
