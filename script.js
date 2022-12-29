// Variables declaration
//lowercase character
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
//uppercase character
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "T", "V", "W", "X", "Y", "Z"];
//numbers character
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//special character
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "/", "~"];

var enter;

var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialChars;

function generatePassword(){
    var generateBtn = document.querySelector("#generate");
    var password = prompt("Choose 8 and 128");

    return password;
}

if (!enter){
    alert("Enter an password");
} else if (enter < 8 || enter > 128){
    enter = parseInt(prompt("Choose between 8 and 128"));
} else {

    var confirmLowercase = confirm("Include a lowercase");
    var confirmUppercase = confirm("Include a uppercase");
    var confirmNumbers = confirm("Include a number");
    var confirmSpecialChars = confirm("Include a specialchars");
};

if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialChars) {
    alert("You must to choice at least one parameter");
};

var confirmLowercase = confirm("Include a lowercase");
var confirmUppercase = confirm("Include a uppercase");
var confirmNumbers = confirm("Include a number");
var confirmSpecialChars = confirm("Include a specialchars");

if (confirmLowercase) {
    passwordChars = passwordChars.concat(lowercase);
}

else if (confirmUppercase) {
    passwordChars = passwordChars.concat(uppercase);
}

else if (confirmNumbers) {
    passwordChars = passwordChars.concat(Numbers);

}

else if (confirmSpecialChars) {
    passwordChars = passwordChars.concat(specialChars);

};

var passwordChars = [];

for (var i = 0; i < enter; i++){
    var randomPassword = randomPassword[Math.floor(Math.random() * randomPassword.length)];
}

function writePassword(){
    var password = generateBtn();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click",() => {password.value = writePassword();
});
