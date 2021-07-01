
import { didUserWin } from './utils.js';


const playButton = document.querySelector('#play');
const winsSpan = document.querySelector('#total-wins');
const lossesSpan = document.querySelector('#total-losses');

// initialize state

let wins = 0;
let losses = 0;

// set event listeners 

playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    const userThrow = selected.value;

    let computerThrow = 'rock';
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerThrow = 'rock';
    }
    if (randomNum === 1) {
        computerThrow = 'paper';
    }
    if (randomNum === 2) {
        computerThrow = 'scissors';
    }
    console.log(computerThrow);
    // check who won
    const isWinner = didUserWin(userThrow, computerThrow);

    if (isWinner){
        wins++;
    } else {
        losses++;
    }
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
});
 // get user input


  // use user input to update state 
  // update DOM to reflect the new state