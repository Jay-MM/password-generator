// Assignment Criteria
  // WHEN user clicks btn, they are given a series of prompts for pwd criteria

  // User selects criteria to include in the password when prompted
    
    // Prompted for length( 8-128 chars)
    // Prompted for char types
        // chooses to include or not to include:
              //  lowrCs, UpperCs, numbers, & OR special chars

  // when input answered 
    // should be validated & atleast 1 chartype should be selected

  // when all prompts answered
    // password is generaated with selected criteria
      // displayed in an alert OR writtn on page
// ------------------------------------------------------------------------------

// Pseudo

// create function for generatePassword()
    // chartype variables
    // pw criteria- prompts
    // conditional statement(s)

// ------------------------------------------------------------------------------

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // create chartype variables
  var lowrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "#", "$","%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@,", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var charLength = prompt ("How many characters do you want your password to be?");
var lowrCasePrompt = confirm ("Do you want to include lowercase letters?");
var upprCasePrompt = confirm ("Do you want to include uppercase letters?");
var numberPrompt = confirm ("Do you want to include numbers?");
var specialCharPrompt = confirm ("Do you want to include special characters?");


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
