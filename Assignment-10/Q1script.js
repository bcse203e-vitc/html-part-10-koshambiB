class NumberGuessingGame {
    constructor() {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;

        // DOM Elements
        this.guessInput = document.getElementById('guessInput');
        this.submitButton = document.getElementById('submitGuess');
        this.messageElement = document.getElementById('message');
        this.attemptsElement = document.getElementById('attempts');
        this.newGameButton = document.getElementById('newGame');

        // Event Listeners
        this.submitButton.addEventListener('click', () => this.makeGuess());
        this.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.makeGuess();
        });
        this.newGameButton.addEventListener('click', () => this.resetGame());

        // Initialize input focus
        this.guessInput.focus();
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 50) + 1;
    }

    makeGuess() {
        if (this.gameOver) return;

        const guess = parseInt(this.guessInput.value);
        this.guessInput.value = '';
        this.guessInput.focus();

        if (isNaN(guess) || guess < 1 || guess > 50) {
            this.showMessage('Please enter a valid number between 1 and 50!', 'error');
            return;
        }

        this.attempts++;
        this.attemptsElement.textContent = this.attempts;

        if (guess === this.targetNumber) {
            this.gameWon();
        } else {
            const hint = guess < this.targetNumber ? 'Too low!' : 'Too high!';
            this.showMessage(`${hint} Try again.`, 'hint');
        }
    }

    gameWon() {
        this.gameOver = true;
        this.showMessage(`Congratulations! You found the number in ${this.attempts} attempts!`, 'success');
        this.submitButton.disabled = true;
        this.guessInput.disabled = true;
        this.newGameButton.style.display = 'inline-block';
    }

    showMessage(text, className) {
        this.messageElement.textContent = text;
        this.messageElement.className = className;
    }

    resetGame() {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
        this.attemptsElement.textContent = '0';
        this.messageElement.textContent = '';
        this.submitButton.disabled = false;
        this.guessInput.disabled = false;
        this.newGameButton.style.display = 'none';
        this.guessInput.focus();
    }
}

// Start the game when the page loads
window.onload = () => {
    new NumberGuessingGame();
};
