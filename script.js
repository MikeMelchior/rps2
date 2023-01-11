const gameMoves = ['rock', 'paper', 'scissors'];
let move;
let playerScore = 0;
let computerScore = 0;

// random computer selection
const getComputerChoice = () => {
    let choice = Math.floor(Math.random(1)*3);
    let move = gameMoves[choice];
    return move;
};

// functions to recognize player move on button click
const setRock = () => {
    move = 'rock';
};
const setPaper = () => {
    move = 'paper';
};
const setScissors = () => {
    move = 'scissors';
};

// function to decide winner of single round and distribute winning points accordingly
const playRound = () => {

    let computerMove = getComputerChoice();
    let playerMove = move;

    alert('Computer chose: ' + computerMove + ' and you chose: ' + playerMove);
    if(computerMove == playerMove) {
        alert('tie round');
        return "its a tie"
    } 
    if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
            alert('point to player')
            playerScore ++;
            return 'you win';
    } 
    else {
        alert('point to computer')
        computerScore ++;
        return 'you lose';
    }
}

//function to keep score card up to date
const updateScore = () => {
    const playerScoreSelector = document.querySelector('.player');
    const computerScoreSelector = document.querySelector('.computer');
    playerScoreSelector.textContent = playerScore;
    computerScoreSelector.textContent = computerScore;
}

// function to check if either player has five points to determine if game has been won
const checkForWinner = () => {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            alert('You win!');
        } else {
            alert('Computer wins');
        };
        playerScore = 0;
        computerScore = 0;
    };
    return
}


// 
// 
//                 DOM MANIPULATION  ~~~~~~~~~~~~~~~~~~~~~~~~
// 
// 









const addMoveSelectionButton = (text, classToAdd) => {
    const buttonContainer = document.querySelector('.button-container');
    const button = document.createElement('button');
    button.classList.add(`rps-button`, `${classToAdd}`);
    button.textContent = text;
    buttonContainer.appendChild(button);
}

addMoveSelectionButton('rock', 'rock');
addMoveSelectionButton('paper', 'paper');
addMoveSelectionButton('scissors', 'scissors');


const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', setRock);
rockButton.addEventListener('click', playRound);

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', setPaper);
paperButton.addEventListener('click', playRound);

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', setScissors);
scissorsButton.addEventListener('click', playRound);

const playButtons = document.querySelectorAll('.rps-button');
playButtons.forEach(button => {
    addEventListener('click', updateScore);
});

playButtons.forEach(button => {
    addEventListener('click', checkForWinner)
})

const scoreCard = document.querySelector('.score-card');

const buildScoreCard = (player, scoreCardTitle, score) => {
    const div = document.createElement('div');
    div.classList.add('score-container');

    const p = document.createElement('p');
    p.classList.add('score-text');
    p.textContent = scoreCardTitle;

    const p2 = document.createElement('p');
    p2.classList.add('score-text',`${player}`);
    p2.textContent = score;

    div.appendChild(p);
    div.appendChild(p2);

    return div
}

scoreCard.appendChild(buildScoreCard('player', 'Player\'s Score: ', `${playerScore}`));
scoreCard.appendChild(buildScoreCard('computer', 'Computer\'s Score: ', `${computerScore}`))


