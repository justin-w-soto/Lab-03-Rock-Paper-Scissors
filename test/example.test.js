// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const win = didUserWin('rock', 'scissors');
    const win2 = didUserWin('scissors', 'paper');
    const win3 = didUserWin('paper', 'rock');

    const loss = didUserWin(); 
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(win, true);
    expect.equal(loss, false);
});
