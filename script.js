var generate = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()_+=][~";

function generatePassword(){
    var password = "";
    var passwordChars = "";
// Prompt message
    var passwordLenght = prompt("How many character you want your password? Password must to br between 8-128 characters.");
    passwordLenght = parseInt(passwordLenght);
    if (passwordLenght < 8){
        alert("Password is to short.");
    }

    if (passwordLenght > 128){
        alert("Password is to long.");
    }

// Create Booleans Yes or No
var lowercaseChoice = confirm("Choose a lowercase letter.");

if (lowercaseChoice){
    passwordChars += lowercase;
}

var uppercaseChoise = confirm("Choose a uppercase letter.");

if (uppercaseChoise){
    passwordChars += uppercase;
}
var numbersChoice = confirm("Choose a numbers.");

if (numbersChoice){
    passwordChars += number;
}

var specialCharChoice = confirm("Choose a specialchar letter.");

if (specialCharChoice){
    passwordChars += specialChar;
}

// The for loop for get the password
for (var i = 0; i < passwordLenght; i++){
    password = passwordChars[Math.floor(Math.random() * passwordChars.length)]
}

function input(){
    var password = generatePassword();
    var password = document.querySelector("#password");
    password.value = password;
}
}

generate.addEventListener("click",() => {password.value = generatePassword();
});   