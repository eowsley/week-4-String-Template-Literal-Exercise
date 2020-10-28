// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
var sum = die1 + die2;
var roll = `You rolled a ${die1} and a ${die2}.They sum to ${sum}`;
console.log(roll)