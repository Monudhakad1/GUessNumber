const randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#sbt');
const input = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowerhi');
const startOver = document.querySelector('.resultparas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    prevGuess.push(guess);
    if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game over! The number was ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`🎉 You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`📉 Too low! Try again.`);
    } else {
        displayMessage(`📈 Too high! Try again.`);
    }
}

function displayGuess(guess) {
    input.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    input.disabled = true;
    submit.disabled = true;
    displayMessage('Click "Start New Game" to play again');

    const newButton = document.createElement('button');
    newButton.textContent = 'Start New Game';
    newButton.classList.add('btn');
    startOver.appendChild(newButton);

    playGame = false;

    newButton.addEventListener('click', function () {
        newGame();
    });
}

function newGame() {
    const newBtn = document.querySelector('.btn');
    newBtn.remove();

    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = '10';
    guessSlot.innerHTML = '';
    lowhigh.innerHTML = '';

    input.disabled = false;
    submit.disabled = false;
    input.value = '';
    playGame = true;

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
