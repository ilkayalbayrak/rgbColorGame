var colors  = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset(); 
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
           
            reset();
        });        
    }
}
function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
            squares[i].addEventListener("click", function(){
                var clickedColor = this.style.backgroundColor;
                //compare color to pickedColor
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!!";
                    resetButton.textContent = "Play Again?";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                }else{
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
            });
        }
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick new color
    pickedColor = pickColor();
    // change colorDisplay
    colorDisplay.textContent = pickedColor;
    //change messageDisplay
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change squares
    for(var i  = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];            
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
    reset()
});

function changeColors(color){
    //loop all squares
    for(var i  = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to arr
    for(var i= 0; i<num; i++){
        //get random color and push into an array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //red 0 255
    var r = Math.floor(Math.random() * 256);
    //green 0 255
    var g = Math.floor(Math.random() * 256);
    //blue 0 255
    var b = Math.floor(Math.random() * 256);
   // add spaces after the commas to get the right RGB format
   //
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 