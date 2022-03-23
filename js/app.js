//Begin by tracking initiation of game (listen for click) "Play" btn
// inform Player to watch pattern before presenting pattern show msg "Watch"
// Display color that needs to be clicked
//create function to formulate random color patters using "blue", 
//"red", "green", and "yellow"
//maintain track of btn clicked to make sure they are correct
// if correct = present new color pattern
//if wrong = show "Game Over: Replay" btn

/*----------------CONSTANT----------*/
const colors = ["blue","red","green","yellow"];
const wrongEntry = 1;


/*----------App's (State Variables)--------*/
//DEFINE THE STATE
// set values in our init fucntions
let randomSequence = []; //random color pattern from Colors
let userEntry = []; //correct color clicked and what order it was clicked in
let wrongSequence = [];
//set elements on the DOM that will need to be updated
const colorBtns = document.querySelectorAll('.colors');
const playBtn = document.querySelector('#play');
const replayBtn = document.querySelector('#replay');
const correctMsg = document.querySelector('#Correct');

/*---------EVENT LISTENERS-------*/
//set up event listeners
document.querySelector('.colors').addEventListener('click', handleClick);
playBtn.addEventListener('click', init);
replayBtn.addEventListener('click', init);
replayBtn.addEventListener('click',() => {
replayBtn.style.display = 'none'});
playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none'});

/*------------------FUNCTIONS-----------------*/
//Initial controller function sets all the initial state vavlues (model)
function init(e){
    //console.log('init function is working') //DELETE

    userEntry = [];

// radom color pattern that needs to be immitated

const randomIndex = Math.floor(Math.random() * colors.length);
let randomColor = colors[randomIndex];
console.log(randomColor);  //DELETE

randomSequence.push(randomColor);
console.log(randomSequence);  //DELETE

// Get sqaures to light up when user presses play to initiate randomSequence
//loop through random sequence , setTimeOut, call function lightSquare
let index = 0
let interval = setInterval(() => {
    lightSquare(randomSequence[index]);
    console.log(index);  //DELETE
    console.log(randomSequence[index]);  //DELETE
    if(index + 1 === randomSequence.length){
        clearInterval(interval)
    }
    index = index + 1;
}, 2000)       
}


function handleClick(e) {
    console.log(e.target.id); //DELETE
userEntry.push(e.target.id)


if(userEntry[userEntry.length -1] === randomSequence[userEntry.length -1]) {
    lightSquare(e.target.id);
    

    //console.log(userEntry);  // DELETE
}else{
    gameOver()
    
}
    

// keep track of when the user is done immitatting the randomSequence 
if(userEntry.length === randomSequence.length){
    init()
}
}

function gameOver(){
    document.querySelector('.colors').removeEventListener('click', handleClick);
    document.getElementById("replay").innerText = "Game Over: Press To Replay";
    document.querySelector('.colors').addEventListener('click', handleClick);
    randomSequence = [];
   
    

}


// get the squares to light up for one second
function lightSquare(color){
    document.getElementById(color).classList.add("light");
    setTimeout(() => document.getElementById(color).classList.remove("light"),1000);
    console.log(color);
}