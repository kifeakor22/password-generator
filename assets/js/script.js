// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let password = {
  lowercase: lowerCasedCharacters,
  uppercase: upperCasedCharacters,
  numeric: numericCharacters,
  specail: specialCharacters
}

let userOptions = {
  passLength: 0,
  lowercaseOption: false,
  uppercaseOption: false,
  numericOption: false,
  specailcharacterOption: false
}

// Function to prompt user for password options
function getPasswordOptions() {
  // prompt user to enter the lenght of password and convert it to int
  do {
    userOptions.passLength = parseInt(prompt('How long do you want your password to be?( Must be between 10-64 characters):'))
    // keep prompting user untill they enter a number and check if the user entered a number 
    } while ((!userOptions.passLength) || (userOptions.passLength < 10)|| (userOptions.passLength> 64) || isNaN(userOptions.passLength)) 
  // prompt user to select character types
     //lowercase
     userOptions.lowercaseOption = confirm("Do you want your password to include lowercase letters?")
     //uppercase
     userOptions.uppercaseOption = confirm("Do you want your password to include uppercase letters?")
     //numeric
     userOptions.numericOption = confirm("do you want to add numbers")
     userOptions.specailcharacterOption = confirm("Do you want your password to contain specail characters?")
    // validate each input at least one characters should be selected 
    if (userOptions.lowercaseOption==false && userOptions.uppercaseOption == false && userOptions.numericOption == false && userOptions.specailcharacterOption == false) {
      alert("you must select at least one option to be included in your password")
    }

}

// Function for getting a random element from an array
function getRandom(arr) {
   return Math.floor(Math.random() * arr.length)
}


// Function to generate password with user input
function generatePassword(userOptions, password) {
  let selectedCharacters = [];
  let Userpass = "";
  // Check if lowercase option is selected
  if (userOptions.lowercaseOption) {
    selectedCharacters = selectedCharacters.concat(password.lowercase);
  }
  // Check if uppercase option is selected
  if (userOptions.uppercaseOption) {
    selectedCharacters = selectedCharacters.concat(password.uppercase);
  }
  // Check if numeric option is selected
  if (userOptions.numericOption) {
    selectedCharacters = selectedCharacters.concat(password.numeric);
  }
  // Check if special characters option is selected
  if (userOptions.specailcharacterOption) {
    selectedCharacters = selectedCharacters.concat(password.specail);
  }
  //Check if no option is selected
  if (selectedCharacters.length === 0) {
    return 'You should select atleast one option';
  }
  // Generate the password
  for (let i = 0; i < userOptions.passLength; i++) {
    Userpass += selectedCharacters[getRandom(selectedCharacters)];
  }

  return Userpass; 
  
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions()
  var newPassword = generatePassword(userOptions,password);
  var passwordText = document.querySelector('#password');

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

