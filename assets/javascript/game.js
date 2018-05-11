var object = {
    words: ["Chance The Rapper", "Kayne West", "Eminem", "Drake", "Nicki Minaj", "J Cole", "Kendrick Lamar", "Donald Glover"],
    imagePaths: ["assets/images/chance.jpg", "assets/images/kayne.jpg", "assets/images/eminem.jpg", "assets/images/drake.jpg", "assets/images/nicki.jpg", "assets/images/jcole.jpg", "assets/images/kendrick.jpeg", "assets/images/childish.jpg"]
}
var wins = 0;
var losses = 0;
var numOfGuesses = 13; 
var wrongLetters = [];
var guessedLetters = [];
var gameRunning = false; 
var underscore = [];
var randomWord = [];
var index = Math.floor(Math.random() * object.words.length);
var randomWord = object.words[index]
var imagepath = object.imagePaths[index];

// Pseudo-Code: GAME start
    //  Press any key to start/restart
    //  Choose a random word 
    //  Replace the letters to underscore 
    //  Display the underscore 
    //  Also display wins/attempts left/wrong guesses 

//FUNCTIONS
    function start () {
        //reset
        gameRunning = true;
        numOfGuesses = 13;
        guessedLetters = [];
        wrongLetters = [];
        underscore = [];


        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === ' ') {
                underscore.push('    ');
            }
            else {
                underscore.push(" __ ");
            }
            // regular expressions/regex - substrings / split and join
        };
        document.querySelector("#images").src = imagepath;
        document.getElementById("wordBlanks").innerHTML = underscore.join("    ");
        //the default separator is a comma, by putting .join (""), it changes the separator to a space.

        numOfGuesses = 13; 
        wrongGuess =[];
        document.querySelector("#alreadyGuessed").innerHTML = "Guessed: [ "+ wrongGuess + "]"


    };
    // Guessing letters:
    //Take in user's guess
    // Check IF already guessed a letter - IF IT IS, check if it is correct
        // if it IS CORRECT, fill in the blank, where it should match.
        // if it IS WRONG, reduce avaiable guess by 1 and display the wrong guess 
 
    function letterGuess(letter) {
        if (gameRunning === true && guessedLetters.indexOf(letter)=== -1){
            guessedLetters.push(letter);

            for (var i=0; i < randomWord.length; i++) {
                if (randomWord[i].toLowerCase() === letter.toLowerCase()) {
                    underscore[i] = randomWord[i]
                }
            }
            document.querySelector("#wordBlanks").textContent = underscore.join(' ');
            Incorrect(letter);
        }
        else {
            if(!gameRunning) {
                alert("Ready?");
                GameOver();
            }
            else {
                alert("You've already guessed this letter!");
            }
        }
    }


    document.onkeyup = function(event) {
        if (event.keyCode >= 65 && event.keyCode <=90) {
            letterGuess(event.key.toLowerCase())
        }
    }


    function Incorrect(letter) {
        if (underscore.indexOf(letter.toLowerCase()) === -1 && 
            underscore.indexOf(letter.toUpperCase())=== -1) {
                numOfGuesses--
                wrongLetters.push(letter);     

        }
        document.querySelector("#alreadyGuessed").innerHTML = "Attempted Letters: [" + wrongLetters + " ]"
        document.querySelector("#numbOfGuesses").innerHTML = "Guess Left: " + numOfGuesses
    }

 
function GameOver() {
    if (numOfGuesses === 0) {
        losses++;
        alert("YOU LOSE");
    }
    else if (randomWord.toLowerCase() === underscore.join('').toLowerCase()) {
        wins++;
        alert("YOU WIN");
    }
    document.querySelector("#losses").innerHTML = "Losses: " + losses
    document.querySelector("#wins").innerHTML = "Wins: " + wins
    start();
}

