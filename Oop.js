// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){
  var instance = {};
  instance.upper = upperbound;
  instance.rand = randInt(upper);
  instance.counter = 0;
  instance.guessMyNumber = guessMyNumber;
  instance.giveUp = giveUp;
  instance.numOfGuesses = numOfGuesses
  return instance
}

function guessMyNumbers(n){
  		counter++;
	    if (n > upper) {
	      return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	    } else if (n === rand) {
	      return "You guessed my number!";
	    }
	    return "Nope! That wasn't it!";
}

function giveUp(){
    	return rand;
}

function numOfGuesses(){
    	return counter;
}