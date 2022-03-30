// used for words needed in game 
/*upon writting code, when pressing a letter button, i couldnt use a lower case one that had the 
answer as an upercase. both parties must match. Look for fix to make non case sensitive. */
var words = [
  "happy",
  "love", 
  "jazz", 
  "bear", 
  "boxing", 
  "sports", 
  "cheap",

]
// var is used for global variables
// LET statements used for local variables
let answer = ' '; 
let maxWrong = 6; // allows you 6 erros 
let mistakes = 0; // gives you current number of erros 
let guessed = [];// gives you guessed numbers
let wordStatus = null; 

//Function is used to generate a random word. 
function randomWord(){ 
  answer = words[Math.floor(Math.random()* words.length)]; 
  //alert(answer); // alert was used to test this. 
}
  // generate buttons for keyword
  function generateButtons() { 
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
      <button 
        class= "btn btn-lg btn-primary m-2" 
        id='`+ letter + `'
        onClick="handleGuess('`+ letter +`')" 
      </button>
      ` + letter + `
      `).join('');
      document.getElementById('keyboard').innerHTML = buttonsHTML; 
      // used for implementing to html  
  }

  function handleGuess(chosenLetter) { 
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null; 
    document.getElementById(chosenLetter).setAttribute('disabled', true); 
    if (answer.indexOf(chosenLetter)>=0) { 
        guessedWord(); // runed to update letters 
        checkIfGameWon();
    } else if  (answer.indexOf(chosenLetter) === -1) { // means doesn't exist
      mistakes ++; // adds 1 to mistakes
      updateMistakes(); // updates the mistakes 
      checkIfGameLost(); 
      //updateHangmanPicture(); // updates the picture of hangman
    }
    }

    //add a hangman pic function
    /*function updateHangmanPicture() {
      // look at utube video for more min - 39:33
    }
    */
    // checks of if we won game by being correct and displays message. 
  function checkIfGameWon(){
    if (wordStatus === answer) { 
      document.getElementById('keyboard').innerHTML = "You've won!"
    }
  }

  // this function allows us to connect when our game ends due to being wrong
  // it also displays our messages and answers
  function checkIfGameLost(){ 
    if (mistakes === maxWrong) { 
      document.getElementById('wordSpotLight').innerHTML = 'The answer was: ' + answer; 
      document.getElementById('keyboard').innerHTML = "You've lost!"
      
    }
  }



  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes; 
  }

  function guessedWord() { 
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ ")).join('');
    
    document.getElementById('wordSpotLight').innerHTML = wordStatus;
    
  }

  function reset() { 
    mistakes = 0; 
    guessed = []; 
    // add hang man pic
    // document.getElementById('hangmanPic').src = 'images/0.png'; 
    randomWord(); 
    guessedWord(); 
    updateMistakes();
    generateButtons();
  }

  document.getElementById('maxWrong').innerHTML = maxWrong; 

  randomWord();  // to call function. 
  generateButtons(); 
  guessedWord(); 
  handleGuess(); 