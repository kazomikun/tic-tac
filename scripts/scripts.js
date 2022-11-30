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
memory.addEventListener("click", function(e) {
  //console.log(e);
  var el = e.target.parentElement
  // console.log(el);
  var numId = el.id
  // console.log(numId);
  if(Number.isInteger(parseInt(numId.replace("back",""),10))) {
    cardClick(el.parentElement.id)
  } else {
    cardClick(numId)
  }
})

function cardClick(cardId) {
  cardNum = cardId.replace("card","")
  cardNum = parseInt(cardNum,10)

  //if game is over, record value of the card is 0
  // see if card is checked
  if (record[cardNum-1]==0 && cardChk == 0 && gameOver == false) {
    //flip the card
    front = document.getElementById("front" + cardNum)
    back = document.getElementById("back" + cardNum)
    front.style.transform = "rotateY(-180deg)"
    back.style.transform = "rotateY(0deg)"


    // // 3. Basic game - no randomisation, no time just flipping
    cardTextRec.push(back.innerHTML)
    cardRec.push(cardNum)
    console.log(cardTextRec);
    console.log(cardRec);
    flipIndex++
    record[cardNum-1] = 1

    if (flipIndex == 2) {
        //compare the cards to see if they are the same
        if (cardTextRec[0] == cardTextRec[1]) {
          correct++
          scoreEl.innerHTML = "Score: " + correct
          cardRec = []
          cardTextRec = []
          flipIndex = 0

          if (correct == 10) {
            //display result and stop game
            setTimeout(displayResult(),600)

          }
          return
        } else { // flip the cards back if not equal
          cardChk = 1
          setTimeout(flipBack(),600)
          return
        }
    }
  }

  if(gameOver == true) {
    alert("Game is over, click New Game to start another game")
  }
}

function displayResult() {
  gameOver = true
  if (correct == 10) {
    alert("Congratulations! You've won the game. Your score is " +correct)
  } else {
    alert ("Game over! your final score is "+correct)
  }
}

function flipBack() {

}
// // 4. Make new game button work
// // 5. Randomise the game boxes on loading - also create image.js file here
// // 6. Create the timer
// // 7. Make the fancy display for results
