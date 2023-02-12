// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "|",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//Global / Password Options
// var totalInput = [lowerInput + upperInput + numInput + specInput];

var charLength = 32; //user input for js function
var newArray = [];
var newPass = [];
var finalPass = [];
var customPass = [];

//Slider
var slider = document.getElementById("passLength");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  charLength = this.value;
  console.log(charLength);
};

// Function to prompt user for password options
function getPasswordOptions(arr) {
  console.log(tempArr);
  arr.forEach((item) => {
    newArray = newArray.concat(item);
    console.log(newArray);
  });
  return newArray;
}

// return filArray;
// copyArray;
// var toStringArray = newArray.toString();
// var concatArray = toStringArray.replaceAll(",", "");
// return passAllInput;

// Function for getting a random element from an array

function getRandom(arr, count) {
  for (i = 0; i < charLength; i++) {
    const passRandom = Math.floor(Math.random() * newArray.length);
    console.log(passRandom);
    if (i < charLength) {
      newPass.splice(i, 0, newArray[passRandom]);
    }
  }
  console.log(newPass);
  return newPass;
}

function getCustomPassword(str1, str2) {
  customPass = str1.substr(str2.length).replace(/\s+/g, "");
  console.log(customPass);
  return customPass;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions(tempArr);
  var newPass = getRandom(newArray, charLength);
  var newPassToString = newPass.toString();
  var finalPass = newPassToString.replace(/,/g, "");
  getCustomPassword(finalPass, customWord);
  finalPass = customWord + "" + customPass;
  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

var lower = $(".chkLower");
var upper = $(".chkUpper");
var num = $(".chkNum");
var spec = $(".chkSpecial");
var custom = $(".formContainer");
var tempArr = [];
var customWord = "";

$(document).ready(function () {
  custom.on("submit", function (event) {
    event.preventDefault();
    customWord = $("#customInput").val();
    console.log(customWord);
    return customWord;
  });
});

lower.on("change", "input[type='checkbox']", function () {
  let lowArr = [];
  if ($(this).is(":checked")) {
    lowArr = lowArr.concat(lowerCasedCharacters);
    tempArr = tempArr.concat(lowArr);
  } else {
    tempArr = tempArr.filter((elem) => {
      return !lowerCasedCharacters.includes(elem);
    });
  }
  console.log(tempArr);
});
upper.on("change", "input[type='checkbox']", function () {
  let uppArr = [];
  if ($(this).is(":checked")) {
    uppArr = uppArr.concat(upperCasedCharacters);
    tempArr = tempArr.concat(uppArr);
  } else {
    tempArr = tempArr.filter((elem) => {
      return !upperCasedCharacters.includes(elem);
    });
  }
  console.log(tempArr);
});

num.on("change", "input[type='checkbox']", function () {
  let numArr = [];
  if ($(this).is(":checked")) {
    numArr = numArr.concat(numericCharacters);
    tempArr = tempArr.concat(numArr);
  } else {
    tempArr = tempArr.filter((elem) => {
      return !numericCharacters.includes(elem);
    });
  }
  console.log(tempArr);
});

spec.on("change", "input[type='checkbox']", function () {
  let spArr = [];
  if ($(this).is(":checked")) {
    spArr = spArr.concat(specialCharacters);
    tempArr = tempArr.concat(spArr);
  } else {
    tempArr = tempArr.filter((elem) => {
      return !specialCharacters.includes(elem);
    });
  }
  console.log(tempArr);
});

generateBtn.addEventListener("click", () => {
  if (
    lower.is(":checked") == false &&
    upper.is(":checked") == false &&
    num.is(":checked") == false &&
    spec.is(":checked") == false
  ) {
    return alert("You must at least select one password criteria.");
  }
  // if (tempArr.length < charLength) {
  //   return alert(
  //     "Your password options do not have enough character numbers you requested."
  //   );
  // }
});

generateBtn.addEventListener("click", () => {
  newArray.length = 0;
  newPass.length = 0;
  finalPass.length = 0;
  writePassword();
});

// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password at least 10 characters but no more than 64.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page
