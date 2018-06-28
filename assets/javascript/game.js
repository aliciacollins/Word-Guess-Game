//create an array
var words = ["abcd", "fjdkasfja","kdsajf","fkdsjf"];

//set up answer array
var answerArray =[];
for(var i = 0; i < word.length, i++){
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0){
    alert(answerArray.join(" "));
}


var word = words[math.floor(math.random()*word.length)];


//gets guesses from players
var guess = prompt("Guess a letter, or click Cancel to stop playing");
if(guess ===null){
    break;
}
else if (guess.length !== 1) {
    alert("Please enter a single letter.");
}
else {
    for(var j = 0; j < word.length; j++){
        if(word[j]===guess){
            answerArray[j]=guess;
            remainingLetters--;
        }
    }
    //update game with guesses
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
