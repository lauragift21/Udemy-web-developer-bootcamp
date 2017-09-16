// create a secret number

    var secretNumber = 4;
// create guess variable
    var guessString = prompt("Guess a number");
    var guess = Number(guessString);

// check if number guessed is true
    if (guess === secretNumber){
        alert("You Got It Right!!!");
    }
// check if it is higher
    else if (guess > secretNumber) {
        alert("Number too high guess again!");
    }
    // check if its too low
    else {
        alert("Number too low guess again!");
    }