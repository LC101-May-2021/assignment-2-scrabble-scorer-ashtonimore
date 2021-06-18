// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  console.log(`Your scores: \n${letterPoints}`);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let userInput = input.question("Let's play some scrabble! Enter a word: ")
   return userInput;
};

let simpleScore = function(word){
  let numericalScore = word.length;
  console.log(`Your score: ${numericalScore}`);
  return numericalScore;
};

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  const vowelScoring = {
    3: ["A", "E", "I", "O", "U"],
    1: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  };
  let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelScoring) {
		 if (vowelScoring[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 };
 
	  };
	};
  console.log(`Your scores: \n${letterPoints}`);
	return letterPoints;
};

let scrabbleScore;
let simpleScoreObject = {
  Name: "Simple Score",
  Description: "Each letter is worth 1 point.",
  Score Function: simpleScore
};
let vowelBonusScoreObject = {
  Name: "Bonus Vowels",
  Description: "Vowels are 3 pts, consonants are 1 pt.",
  Score Function: vowelBonusScore
};
let oldScrabbleScorerObject = {
  Name: "Scrabble",
  Description: "The traditional scoring algorithm.",
  Score Function: oldScrabbleScorer
const scoringAlgorithms = [oldScrabbleScorerObject, simpleScoreObject, vowelBonusScoreObject];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
  //oldScrabbleScorer(initialPrompt());
 // simpleScore(initialPrompt());
 vowelBonusScore(initialPrompt());
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

