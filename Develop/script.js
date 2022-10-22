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

// select elemnts from DOM

// create function for generatePassword()
    // pwd criteria
    // prompts
    // conditional statement(s)

// ------------------------------------------------------------------------------

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
