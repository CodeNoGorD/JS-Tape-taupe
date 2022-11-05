const squares = document.querySelectorAll('.square');
const taupe = document.querySelector('.taupe');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('taupe');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];

    randomSquare.classList.add('taupe');
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })

});

function moveTaupe() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

moveTaupe();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        alert('GAME OVER : Votre score final est : ' + result);
        timeLeft.textContent = 0;
        clearInterval(countDownTimerId);
        clearInterval(timerId);
      
    }
}

let countDownTimerId = setInterval(countDown, 1000);