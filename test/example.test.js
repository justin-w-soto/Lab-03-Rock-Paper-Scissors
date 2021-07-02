// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('testing my function', (expect) => {
  
    // Set up your arguments and expectations
    const expected = 'You Win!';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
    
});

test('rock vs paper', (expect) => {
    const expected = 'You Lose!';
    const actual = didUserWin('rock', 'paper');
    expect.equal(expected, actual);
});

test ('rock vs rock', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(expected, actual);
});
