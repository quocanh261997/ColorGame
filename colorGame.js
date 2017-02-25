var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

begin();

function begin(){
  setUpModeFunction();
  setUpSquares();
  reset();
}

function setUpModeFunction(){
  for (var i = 0 ; i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy"? numberOfSquares=3:numberOfSquares=6;
      reset();

    });
  }
}

function setUpSquares(){
  for (var i = 0; i<squares.length;i++){
    squares[i].addEventListener("click",function(){
      var pick = this.style.background;
      if (pick === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColor(pick);
        document.querySelector("h1").style.background = pick;
        resetButton.textContent = "Play Again?";
      }
      else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
    }
}

function reset(){
  messageDisplay.textContent = "";
  resetButton.textContent = "New Color";
  colors = generateRandomColor(numberOfSquares);
  pickedColor = colors[Math.floor(Math.random()*colors.length)];
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i<squares.length;i++){
    if (colors[i]){
       squares[i].style.display = "block";
       squares[i].style.background = colors[i];
     }
    else squares[i].style.display = "none";
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click",function(){
  reset();
});


function changeColor(color){
  //loop through all squares
  //change color of given color
  for (var i = 0; i<squares.length;i++){
    squares[i].style.background = color;
  }
}

function generateRandomColor(n){
  //Make an array, add n random colors
  //Return that color
  var arr = [];
  for (var i=0;i<n;i++){
    //Get random color and push to the array
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //Pick a red from "0-255"
  var r = Math.floor(Math.random()*256);
  //Pick a green from "0-255"
  var g = Math.floor(Math.random()*256);
  //Pick a blue from "0-255"
  var b = Math.floor(Math.random()*256);
  //Return the string format
  return "rgb(" + r + ", "+g+", " +b +")";
}
