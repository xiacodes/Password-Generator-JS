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


// Extra variables
var length;
var numbers;
var upperCase;
var lowerCase;
var special;
var addons;


// Function to prompt user for password options
function getPasswordOptions() {
  length = parseInt(prompt("Length of password - between 10 and 64:)"));
  numbers = prompt("Include a number? [Yes/No]");
  upperCase = prompt("Include uppercase letters? [Yes/No]");
  lowerCase = prompt("Include lowercase letters? [Yes/No]");
  special = prompt("Include a special character? [Yes/No]");
}
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) { 
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {

  //If they selected an option
  if (numbers == "Yes") {
    addons = getRandom(numericCharacters)
  }
  if (upperCase == "Yes") {
    addons += getRandom(upperCasedCharacters)
  }
  if (lowerCase == "Yes") {
    addons += getRandom(lowerCasedCharacters);
  }
  if (special == "Yes") {
    addons += getRandom(specialCharacters)
  }
}
generatePassword();
alert("The password is " + addons);

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