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
let wrongColor = []; //wrong color clicked ['blue','red', 'green', 'yellow']


//set elements on the DOM that will need to be updated
const colorBtns = document.querySelectorAll('.colors');
const playBtn = document.querySelector('#play');
const replayBtn = document.querySelector('#replay');

/*---------EVENT LISTENERS-------*/
//set up event listeners
document.querySelector('.colors').addEventListener('click', handleClick);
playBtn.addEventListener('click', init);
replayBtn.addEventListener('click', init);

/*------------------FUNCTIONS-----------------*/
//Initial controller function sets all the initial state vavlues (model)
function init(e){
    console.log('init function is working')
userEntry = [];
// radom color pattern that needs to be immitated

const randomIndex = Math.floor(Math.random() * colors.length);
let randomColor = colors[randomIndex];
console.log(randomColor);

randomSequence.push(randomColor);
console.log(randomSequence);

// loop through random sequence , settimeinterval, call function lightSquare
}

function handleClick(e){
    console.log(e.target.id);
userEntry.push(e.target.id)
if(userEntry[userEntry.length -1] === randomSequence[userEntry.length -1]) {
    lightSquare(e.target.id)
    console.log(userEntry);
}else{

}
if(userEntry.length === randomSequence.length){
    init()
}


}

function lightSquare(color){
    document.getElementById(color).classList.add("light");
    setTimeout(() => document.getElementById(color).classList.remove("light"),1000);
}
