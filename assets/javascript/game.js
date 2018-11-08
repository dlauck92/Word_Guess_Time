// word array
var words = [
    "mario",
    "zelda",
    "pokemon",
    "skyrim",
    "uncharted",
    "castlevania",
    "sonic"
];

// random word generated
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

var rightWord = [];
var wrongWord = [];

// underscore generation
var underScore = [];
var generateUnderscore = () => {
    for(var i = 0; i < randomWord.length; i++)
        underScore.push("_");
        domUnderscore[0].innerHTML = underscore.join('');

        return underScore;
}
console.log(generateUnderscore());

 // DOM
 var domUnderscore = document.getElementsByClassName('underScore');



 // record user entry
document.addEventListener('keypress', (event) => {
        var keyCode = event.keyCode;
        var keyWord = String.fromCharCode(keyCode);

// check if user entry is a correct letter
if(randomWord.indexOf(keyWord) > -1) {
        rightWord.push(keyWord);
        underScore[randomWord.indexOf(keyWord)] = keyWord;
}
// check to see if user entries match randomWord      
if(underScore.join('') == randomWord) {
        alert("Winner!!");
}

});

// wrong letter




// answer
var answerArray = [];
for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = words.length;

