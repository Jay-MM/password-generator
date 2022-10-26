
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //  global variables
  var lowrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = [" ", "!", "#", "$","%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@,", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // prompts
  var charLength = prompt ("How many characters do you want your password to be? (8 -128)");
  var lowrCasePrompt = confirm ("Do you want to include lowercase letters?");
  var upprCasePrompt = confirm ("Do you want to include uppercase letters?");
  var specialCharPrompt = confirm ("Do you want to include special characters?");
  var numberPrompt = confirm ("Do you want to include numbers?");
  
  // Empty arrays
  var result = [];
  var userInput = [];

  // conditional statements
    if (lowrCasePrompt){
    result = result.concat(lowrCase);
    }
    if (upprCasePrompt){
      result = result.concat(upprCase);
    }
    if (specialCharPrompt){
      result = result.concat(specialChar);
    }
    if (numberPrompt){
     result = result.concat(number);
    }
    
    console.log(result)

  

    for (var i = 0; i < charLength; i++) {
      
      userInput.push (result[Math.floor(Math.random() * result.length)]);
   
      console.log (userInput)
    }
  
      return userInput
    }
    
    
    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
