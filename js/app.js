// Begin by tracking initiation of game (listen for click) "Play" btn
// Display color that needs to be clicked
// create function to formulate random color patters using "blue", 
// "red", "green", and "yellow"
// maintain track of btn clicked to make sure they are correct
// if correct = present new randomSequence
// if wrong = show "Game Over: Replay" msg

/*----------------CONSTANT----------*/
const colors = ["blue","red","green","yellow"];
const wrongEntry = 1;


/*----------App's (State Variables)--------*/
// DEFINE THE STATE
// set values in init fucntions
let randomSequence = []; //random color pattern from Colors
let userEntry = []; //correct color clicked by user

// set elements on the DOM that will need to be updated
const colorBtns = document.querySelectorAll('.colors');
const playBtn = document.querySelector('#play');
const replayBtn = document.querySelector('#replay');
const instructions = document.querySelector('#instructions');

/*---------EVENT LISTENERS-------*/
// set up event listeners
document.querySelector('.colors').addEventListener('click', handleClick);
playBtn.addEventListener('click', init);
replayBtn.addEventListener('click', init);
replayBtn.addEventListener('click', () => { //remove msg after new game starts
    replayBtn.innerText = "   "});
playBtn.addEventListener('click', () => {    //hide play btn when game begins
    playBtn.style.display = 'none'});

/*------------------FUNCTIONS-----------------*/
// Initial controller function sets all the initial state vavlues 
function init(e) {
    document.querySelector('#instructions').style.visibility = 'hidden';
    document.querySelector('#replay').style.visibility = 'hidden';

userEntry = [];

// Array of radom color pattern to form randomSequence using ['blue', 'red', 'green', 'yellow']
const randomIndex = Math.floor(Math.random() * colors.length);
let randomColor = colors[randomIndex];

// random sequence
randomSequence.push(randomColor);


// Get sqaures to light up  for a second after user presses play btn to initiate randomSequence
// loop through random sequence , setTimeOut, call function lightSquare

let index = 0
let interval = setInterval(() => {
    lightSquare(randomSequence[index]);
    if(index + 1 === randomSequence.length){
        clearInterval(interval)
    }
    index = index + 1;
}, 1000);       
}

// indicate what square is being clicked
function handleClick(e) {
    userEntry.push(e.target.id);

    // check to ensure user's entry matches computer's randomSequence, if wrong = gameover

    if  (userEntry[userEntry.length -1 ] === randomSequence[userEntry.length -1 ]) {
        lightSquare(e.target.id);
    }   else    {
        gameOver();
    }
    
    // keep track of when the user is done entering the randomSequence when done introduce another sequence
    if  (userEntry.length === randomSequence.length) {
    init();
    }
}
// when a wrong square is clicked, do not allow user to click on squares, show "game over",return click
// function and restart sequence
function gameOver() {
    document.querySelector('.colors').removeEventListener('click', handleClick);
    document.querySelector('#replay').style.visibility = 'visible';
    document.getElementById("replay").innerText = "Game Over: Press To Replay";
    document.querySelector('.colors').addEventListener('click', handleClick);
    randomSequence = [];
}


// Lightup squares for one second
function lightSquare(color) {
    document.getElementById(color).classList.add("light");
    setTimeout(() => document.getElementById(color).classList.remove("light"),500);
}


