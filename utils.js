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