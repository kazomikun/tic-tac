// // 1. Create and assign variables & retrieve  the necessary HTML elements
let record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var imgRec = [];
var rand;
var flipIndex = 0;
var cardTextRec = [];
var cardRec = [];
let cardNum;
let back;
let front;
var cardChk = 0;
var correct = 0;

var memory = document.getElementById("game");
var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var newGame;
var result = document.getElementById("result");
var opacityD = document.getElementById("opacityD");
var h1Res = document.getElementById("h1Res");
var p1Res = document.getElementById("pRes");

let status = 0;
let countDown
var secsInput = 60;
let seconds = secsInput;
let gameOver = false

// // 2. Make the flipping work
console.log(memory);
// // 3. Basic game - no randomisation, no time just flipping
// // 4. Make new game button work
// // 5. Randomise the game boxes on loading - also create image.js file here
// // 6. Create the timer
// // 7. Make the fancy display for results
console.log("Hello");