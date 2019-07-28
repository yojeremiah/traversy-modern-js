/* 
GAME RULES:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they lose
- Let the player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesRemaining = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  guessMessage = document.querySelector('.message');

// Assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    console.log('woah');
    window.location.reload();
  }
});

// Listen for submit
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  }

  // Check if guess is correct
  if (guess === winningNum) {
    // Game over - user won
    gameOver(true, `${winningNum} is correct - YOU WIN!`, 'green');
  }
  // Check if guess is incorrect
  else {
    guessesRemaining--;
    // Check if any guesses are left
    if (guessesRemaining === 0) {
      // Game over - user lost
      gameOver(
        false,
        `Game over, the correct number is ${winningNum} - YOU LOST!`
      );
    } else {
      // Game continues - guess was wrong
      // Notify user guess was incorrect
      setMessage(
        `Guess is not correct - ${guessesRemaining} guesses left!`,
        'red'
      );
      // Change input border
      guessInput.style.borderColor = 'red';
      // Clear input
      guessInput.value = '';
    }
  }
});

// Set message to user
function setMessage(message, color) {
  guessMessage.style.color = color;
  guessMessage.textContent = message;
}

// Game over handler
function gameOver(won, msg) {
  // Set color based on win/lose
  let color;
  won === true ? (color = 'green') : (color = 'red');
  // Disable the input
  guessInput.disabled = true;
  // Change input border
  guessInput.style.borderColor = color;
  // Set text color
  guessMessage.style.color = color;
  // Notify user they have won
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.classList.add('play-again');
}

// Generate a winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
