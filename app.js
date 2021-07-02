
import { didUserWin } from './utils.js';

const playButton = document.querySelector('#play');
const winsSpan = document.querySelector('#total-wins');
const lossesSpan = document.querySelector('#total-losses');
const matchDraw = document.querySelector('#total-draws');

// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

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
    //console.log(computerThrow);
    
    const isWinner = didUserWin(userThrow, computerThrow);

    if (isWinner === 'You Win!'){
        wins++;
    } else if (isWinner === 'You Lose!') {
        losses++;
    } else {
        draws++;
    }
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    matchDraw.textContent = draws;
});
 