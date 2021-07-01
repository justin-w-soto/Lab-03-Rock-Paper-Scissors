// userThrow
// rock, paper, scissors

// computerThrow
// rock, paper, scissors

// if the userThrow is the same as the computerThrow
//   return 'draw'
// if the user throws rock
//    if computerThrow is scissors return 'win'
// if the user throws paper
//    if computerThrow is rock return 'win'
// if the user throw scissors
//    if computerThrow is paper return 'win'
// return 'lose'

export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        'draw';
    } if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 'You Win!';
    } if (userThrow === 'rock' && computerThrow === 'paper') {
        return 'You Lose!';
    } if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 'You Win!';
    } if (userThrow === 'scissors' && computerThrow === 'rock') {
        return 'You Lose!';
    } if (userThrow === 'paper' && computerThrow === 'scissors') {
        return 'You Lose!';
    } if (userThrow === 'paper' && computerThrow === 'rock') {
        return 'You Win!';
    }
}