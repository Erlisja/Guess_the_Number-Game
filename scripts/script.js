document.getElementById('#start-button').addEventListener('click', startGame);

let randomNumber;
let userGuesses = [];
let attemptsLeft = 10;

function startGame() {
    alert('Welcome to the guessing game!');
    alert('I have selected a random number between 1 and 100. You have to guess it correctly.');
    //const startGame = confirm('Do you want to start the game?');
    const startPrompt = window.prompt('Do you want to start the game?(yes/no)');
    if (startPrompt && startPrompt.toLowerCase() === 'yes') {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptsLeft = 10;
        userGuesses = [];
        document.getElementById('message').textContent =`You have ${attemptsLeft} attempts left`;  //displays the number of attempts left in the pop up
        document.getElementById('userGuesses').innerHTML = '';   //clears the previous guesses

     
    }
    else {
        alert('Game Over');
    }
}
    
