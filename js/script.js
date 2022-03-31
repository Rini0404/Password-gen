// Arrays for special characters, lowercase letters, uppercase letters, and numbers 
var generateBtn = document.querySelector("#generate");
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  got rid of some functions, its better to have it under one and have another to call the function through the btn ...
// my main function to run, does all the character selecting!
function generatePassword() { 
  // error handling
  // confirmation for user choices through confirm 
  // if statements for user choosing no
  // object to store all data from user choice
  // return object
// vars for use when user has selected their options!
// set as empty to later have input
// password that will grab the data, will check off what type pf characters will be used. 
    var pPassWord = ""; 
    var generatedP = ""; 
      var pLength = prompt("How many characters do you want to use? By default, you must need a minimum of 8 or a maximum of 128.")
      // this created the check for # of char
      if (pLength < 8 ||  pLength > 128) { 
        alert(`Password must be 8 and above charecters long. But no greater than 128.`);    
      };
      // show user their progress. 
      alert(`You have chosen to use ${pLength} characters!`)
      // special chars prompt
    var hasSpecialChars = confirm(`Would you like to use Special Characters? Such as : ${specialChars}`)
    if (hasSpecialChars) { 
      // adds to new array...
        pPassWord+= specialChars;
        alert(`Nice! Making your password more secure😎`)
    } else { 
      alert(`You chose no Special Characters...`)
    };

      var hasLowerCase = confirm(`Would you prefer having lowercase characters?`)
      if (hasLowerCase) { 
        pPassWord += lowercase; 
        alert(`You chose lowercase characters!`)
      } else { 
      alert(`You have chosen no lowercase 😱`)
      } ;
    
    var hasUpperCase = confirm(`How about capital letters?`)
    if (hasUpperCase) { 
      
        pPassWord += uppercase;
        alert(`Seems to be that you chose... CAPITAL LETTERS 😎`)
    } else { 
      alert(`Why didn't you choose these?😫`)
    };
      var hasNumbers = confirm(`Lastly, numbers? Ya know, like the ones that indicate your age..`)
      if (hasNumbers) { 
        pPassWord += numberChars
        alert(`Thank you, numbers it is!`)
      } else { 
      alert(`It's okay, to choose not to sometimes.. `)
      }; 
    

  console.log(pPassWord);
// need an array to randomize 
// concatinated my arrays

    for (var i = 0; i < pLength; i++) { 
      // use math.floor
      var randO = Math.floor(Math.random()* pPassWord.length);  
      const elRandom = pPassWord[randO]; 
      generatedP += elRandom; 
    
    }
    // this generates the final password, aka the secure one
    return generatedP; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// call functions
// just added a function to call the function lol
newFunction();
function newFunction() {
  generatePassword();
  writePassword();
}

