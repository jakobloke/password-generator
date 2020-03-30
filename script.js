// Assignment code here
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var specialChar = ['!@#$%^&*()_+'];
var numbers = ['1234567890'];
var length, upper, lower, number, special;
var values = [];
var all;

document.getElementById("generate").addEventListener("click", writePassword);
function generatePassword(){
  var pwd='';
  length = window.prompt("How many characters do you want? (Choose a number from 8 to 128)");
  upper = window.confirm("Would you like Upper Case letters?");
  lower = window.confirm("Would you like Lower case letters?");
  number = window.confirm("Would you like numbers?");
  special = window.confirm("Would you like special characters?");

  if(upper==true)
  {
    values.push(upperCase[0]);
  }
  if(lower==true)
  {
    values.push(lowerCase[0]);
  }
  if(number==true)
  {
    values.push(numbers[0]);
  }
  if(special==true)
  {
    values.push(specialChar[0]);
  }
  if(values==null)
  {
    window.alert("Please select at least one option");
  }

  all = values.join('')

  for(var i = 0; i <= length; i++){
    pwd += all.charAt(Math.floor(Math.random() * all.length));
  };
  return pwd;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button

