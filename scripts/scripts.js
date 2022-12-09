// // 1. Create and assign variables & retrieve  the necessary HTML elements
var record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var imgRec = [];
var rand;
var flipIndex = 0;
var cardTextRec = [];
var cardRec = [];
var cardNum;
var back;
var front;
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

    flipIndex++
    record[cardNum-1] = 1

    if (flipIndex == 2) {
      console.log("1. "+cardChk);
        //compare the cards to see if they are the same
        if (cardTextRec[0] == cardTextRec[1]) {
          console.log("2. "+cardChk);

          correct++
          scoreEl.innerHTML = "Score: " + correct
          cardRec = []
          cardTextRec = []
          flipIndex = 0

          if (correct == 10) {
            //display result and stop game
            setTimeout(function(){displayResult()},600)
            clearTimeout(countDown)
          }
          return
        } else { // flip the cards back if not equal
          console.log("3. "+cardChk);

          cardChk = 1
          setTimeout(function(){flipBack()},600)
          return
        }
    }
  }

  if(gameOver == true) {
    alert("Game is over, click New Game to start another game")
  }
}

function flipBack() {
  front = document.getElementById("front"+cardRec[0])
  back = document.getElementById("back"+cardRec[0])
  front.style.transform = "rotateY(0deg)"
  back.style.transform = "rotateY(180deg)"

  front = document.getElementById("front"+cardRec[1])
  back = document.getElementById("back"+cardRec[1])
  front.style.transform = "rotateY(0deg)"
  back.style.transform = "rotateY(-180deg)"

  record[cardRec[0]-1] = 0
  record[cardRec[1]-1] = 0
  cardTextRec = []
  cardRec = []
  flipIndex = 0
  cardChk = 0
}
// // 4. Make new game button work
newGame = document.getElementById("new")
newGame.addEventListener("click",newClick)

function newClick() {
  window.location.reload()
}
// // 5. Randomise the game boxes on loading - also create image.js file here
function newBoard() {
  for(var i=0; i<20; i++) {
    if(i==0) {
      var rand = Math.round(Math.random() * images.length)
      while(rand == images.length) {
        rand = Math.round(Math.random() * images.length)
      }
      imgRec[i] = rand
    } else {
        while(status == 0) {
          rand = Math.round(Math.random() * images.length)
          if (rand !== images.length) {
            for(var j=0; j<imgRec.length; j++) {
              if(rand == imgRec[j]) {
                break
              } else if (j == imgRec.length -1) {
                status = 1
                imgRec[i] = rand
              }
            }
          }
        }
    }
    status = 0
    console.log("random " + images[rand]);
    document.getElementById("back"+(i+1)).innerHTML = images[rand]
  }
  startTimer(seconds)
}

// // 6. Create the timer
function startTimer(secs) {
  timer.innerHTML = "00:"+secs

  if (secs == 0) {
    clearTimeout(countDown)
    displayResult()
    timer.innerHTML = "00:00"
    return
  }
  secs--

  countDown = setTimeout(function(){startTimer(secs)},1000)
}
// 7. Make the fancy display for results
function displayResult() {
  gameOver = true

  var width = window.innerWidth
  opacityD.style.display = "block"
  result.style.display = "block"
  result.style.left = (width/2) - (500/2) + "px"
  result.style.top = 150 + "px"

  if (correct == 10) {
    h1Res.innerHTML = "Congratulations You've won!"
  } else {
    h1Res.innerHTML = "Try again!"
  }
  pRes.innerHTML = "You've scored " + correct
}

var okayButton = document.getElementById("okayButton")
okayButton.addEventListener("click",okayClick)

function okayClick() {
  opacityD.style.display = "none"
  result.style.display = "none"
}

window.onload = newBoard()
