// Function to generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const randomNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;

    // Function to handle user's guess
    function handleGuess() {
        const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempts++;

        if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
        } else if (userGuess < randomNumber) {
            alert("Too low. Try again.");
            handleGuess(); // Recursive call to continue the game
        } else {
            alert("Too high. Try again.");
            handleGuess(); // Recursive call to continue the game
        }
    }

    // Start the game by calling the handleGuess function
    handleGuess();
}

// Start the game when the page loads
startGame();
