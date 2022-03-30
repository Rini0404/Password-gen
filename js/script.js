// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function userSelected() { 
  // error handling
  // confirmation for user choices through confirm 
  // if statements for user choosing no
  // object to store all data from user choice
  // return object

  var password = ""

    let howMuch = prompt("How many characters do you want to use? By default, you must need a minimum of 8 and a maximum of 128.")
      // this created the check for #of char
      if ( howMuch <= 8 ) { 
        alert(`Password must be 8+ charecters long.`);    
      
      
      password = howMuch(); 
      }

        let specialChars = confirm(`Would you like to use Special Characters?`); 
        if  (specialChars = true) {
          alert(`Okay!`) 
        }


    let uppercase = confirm(`How about Capital letters?`); 
    if (uppercase = true) {

    }else (uppercase = false) =>{
      alert(`okay you've selected no uppercases!`)
    }





    let lowercase = confirm(`What about Lowercase letters?`); 
    let numberChars = confirm(`Lastly, and Numbers?`); 
    alert("Thank you!")
}
// need an array to randomize 
// concatinated my arrays
const all = numberChars + lowercase + uppercase.concat(specialChars)
var random = Math.floor(Math.random()* all.length); 

function randomSelected(random) { 
    // use math.floor
    let random = all[random]; 

    // choose random character in array 

    
    // return random element
    return randomSelected(); 

}

// generate randome function 
function generatePassword() { 
  // create an empty variable to store the concatenated passwprd. 
  var choice = userSelected();  
  // create variable holding all posible passwords
  // create an empty variable to store chosen characters. 
  var chosenChar = ""; 
  
  //  error handling to see if the object with your choices exists 

  // conditional statement(if) when user has chosen special characters and must push new random characters. from an array 
  // have if statements for num, upper, lower, special
    if(choice.obj) { 
      possibleChar = possible.concat(specialChars); 
      // .push adds to array 
      //  pushing to new array 
      pickedCharacters.push(randomSelected(specialChars))
    } 

    // iterate over the passsword length fome choices made(OBJ), selecting random indexes from the array of possible characters and puts them into a result variable 
    for (var i = 0; i < choice.length; i++) { 
        var possibleChar = getSelection[i]; 
    
    }

    for (var i = 0; i < choice.length; i++) { 

        var element = choice[index]

    }
    // combine results and send them to the function on the page 
// .join()
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
// 6generateBtn.addEventListener("click", writePassword);

// call functions
generatePassword();
writePassword();
userSelected();