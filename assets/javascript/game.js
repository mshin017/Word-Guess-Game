var words = ["Chance The Rapper", "Kayne West", "Eminem", "Ice Cube", "Drake", "Jay Z", "Tupac", "Dr. Dre", 
"Nicki Minaj", "J Cole", "Cardi B","Kendrick Lamar","ASAP Rocky", "Donald Glover", "Post Malone"];

var correct = 0;
var wrong = 0; 
var numOfGuesses = 13; 
var wrongGuesses = [];
var underscore = []
var randomWord;

// Pseudo-Code: GAME start
    //  Press any key to start/restart
    //  Choose a random word 
    //  Replace the letters to underscore 
    //  Display the underscore 
    //  Also display wins/attempts left/wrong guesses 

//FUNCTIONS
    function start () {
        var randomWord = words[Math.floor(Math.random() * words.length)];
            console.log(randomWord);
        for (var i = 0; i < randomWord.length; i++) {
            underscore.push(" __ ");
            //HOW TO CHANGE SPACES TO SPACES?? -- .replace("_"," ")

        };

        document.getElementById("wordBlanks").innerHTML = underscore.join(" ");
        //the default separator is a comma, by putting .join (""), it changes the separator to a space.

        numOfGuesses = 13; 
        wrongGuess =[];

        document.getElementById("alreadyGuessed").innerHTML = wrongGuess

    };
    // Guessing letters:
    //Take in user's guess
    // Check IF already guessed a letter - IF IT IS, check if it is correct
        // if it IS CORRECT, fill in the blank, where it should match.
        // if it IS WRONG, reduce avaiable guess by 1 and display the wrong guess 
 
    document.onkeyup = function(event) { 

        var userGuess = event.key.toLowerCase();
        
        if (randomWord.indexOf(userGuess) === -1) {
            console.log('yes');
            for (var i=0; i < randomWord.length; i++){

                if(userGuess === randomWord[i]) {
                    //trying to fill in the blank//
                    userGuess = underscore[i];
                    win++;
                }
            }
        }
        else {
            wrongGuess.push(userGuess);
            numOfGuesses--;
    
        }
    }
    
//Restart game
    // function restart () {
    //     if (win === randomWord.length) {
    //         //start all over//
    //     }
    //     else if (numOfGuesses === 0) {
    //         //game ends//
    //     }
    // }
   

//-----------------------------------------------------
//Execute
start();
