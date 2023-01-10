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
  lowercas: lowerCasedCharacters,
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
    userOptions.passLength = parseInt(prompt('Enter password length (10-64 characters):'))
    // check if the user entered a number 
    if (isNaN(userOptions.passLength)) {
      alert("please enter a valid number")
    }
     // check if password lenght entered is > 10 but < 64
    if (password.length < 10 || password.passLength> 64){
      alert("password lenght is invalid please enter a valid length")
    }

 
  // prompt user to select character types
  
     //lowercase
     userOptions.lowercaseOption = confirm("Do you want your password to contain lowercase letters included?")
     //uppercase
     userOptions.uppercaseOption = confirm("Do you want your password to contain Uppercase letters included?")
     //numeric
      userOptions.uppercaseOption = confirm("Do you want your password to contain Uppercase letters included?")
     //specail characters
     userOptions.specailcharacterOption = confirm("Do you want your password to contain specail characters?")
    // validate each input at least one characters should be selected 

}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
 console.log(getRandom(numericCharacters))

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);