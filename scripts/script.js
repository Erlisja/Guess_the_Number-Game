

let randomNumber;
let userGuesses = [];
let attemptsLeft = 10;

function startGame() {
    alert('Welcome to the guessing game!');
    alert('I have selected a random number between 1 and 100. You have to guess it correctly.');

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    userGuesses = [];

    document.getElementById('message').textContent = 'You have 10 attempts to guess the number';
    document.getElementById('guess-list').textContent = '';
    guessNumber();

}
function guessNumber() {
    if (attemptsLeft == 0) {
        document.getElementById('message').textContent = `Game over! The correct number was ${randomNumber}.`;
        return;
    }
    let guess;
    // create a prompt to get the user's guess
    guess = parseInt(window.prompt(`Enter a number between 1 and 100. Attempts left: ${attemptsLeft}`));

    // check if the guess is correct
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100');
        guessNumber();
        return;
    }

    // store the guess in the userGuesses array
    userGuesses.push(guess);
    attemptsLeft--;

    // check if the guess is correct
    if (guess === randomNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        document.getElementById('guess-list').innerHTML = `Your guesses: ${userGuesses.join(', ')}`;
        gameContainer.style.backgroundColor = 'green';
        return;
        // check if the guess is lower than the random number
    } else if (guess < randomNumber) {
        alert('Incorrect! Try a higher number');
        // check if the guess is higher than the random number 
    } else {
        alert('Incorrect! Try a lower number');
    }
    // Update DOM with remaining attempts and guessed numbers
    document.getElementById('message').textContent = `You have ${attemptsLeft} attempts remaining.`;
    document.getElementById('guess-list').innerHTML.textContent = `Your guesses: ${userGuesses.join(', ')}`;

    // Call the guessNumber function recursively to allow the user to keep guessing
    guessNumber();
}