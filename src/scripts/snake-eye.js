let NUM_DECIMAL_PLACES = 2;

// Number Validation Variables
let numberValid = false;
let numSides;

// Statistic and Game Initial Value
let diceRoll1, diceRoll2;
let snakeEyes = false;
let rollNumber = 0;
let doublesCount = 0;
let averageRoll1, averageRoll2;
let runningTotal1 = 0;
let runningTotal2 = 0;

//Global Functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max+1 - min)) + min;
};

//Number validation code
while (!numberValid) {
  numSides = parseInt(prompt("How many sides do you want on your dice?"));
  if (numSides >= 3) {
  numberValid = true
  } else {
  alert("You have entered an invalid number! Number must be 3 or higher!")
  }
};

//Dice Rolling and Statistic Code
while (!snakeEyes) {
  rollNumber++;
  diceRoll1 = getRandomInt(1,numSides);
  diceRoll2 = getRandomInt(1,numSides);
  console.log (rollNumber + ". Die one is: " + diceRoll1 + " and Die two is: " + diceRoll2 + ".");
  if (diceRoll1 == 1 && diceRoll2 == 1) { //If the roll is snake eyes
    doublesCount++;
    snakeEyes = true;
  } else { //If the roll is not snake eyes
    if (diceRoll1 == diceRoll2) { //Check for doubles otherwise do nothing
      doublesCount++;
    }
  }
  runningTotal1 += diceRoll1;
  runningTotal2 += diceRoll2;
};

//Final average calculation
averageRoll1 = runningTotal1 / rollNumber;
averageRoll2 = runningTotal2 / rollNumber;

// Game Message Code
console.log ("You got snake eyes! Finally! On try number: " + rollNumber + "!\nAlong the way you rolled doubles " + doublesCount + " times. \nThe average roll for die #1 was: " + averageRoll1.toFixed(NUM_DECIMAL_PLACES) + "\nThe average roll for die #2 was: " + averageRoll2.toFixed(NUM_DECIMAL_PLACES));