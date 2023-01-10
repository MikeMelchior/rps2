gameMoves = ['rock', 'paper', 'scissors'];

getComputerChoice = () => {
    let choice = Math.floor(Math.random(1)*3);
    let move = gameMoves[choice];
    return move;
};

const getPlayerChoice = () => {
    let choice = prompt('Select rock, paper or scissors').toLowerCase();
    while (choice !== 'rock' && choice !== 'scissors' && choice !== 'paper') {
        alert('Please make sure your selection is spelled correctly');
        choice = prompt('Select rock, paper or scissors').toLowerCase();
    }
    return choice
};

let playerScore = 0;
let computerScore = 0;

playRound = () => {

    let computerMove = getComputerChoice();
    let playerMove = getPlayerChoice();

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

game = () => {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        alert('player: ' + playerScore + ' computer: ' + computerScore);
        playRound();
    }
    alert('player: ' + playerScore + ' computer: ' + computerScore);
    if (playerScore === 3){
        alert('You win!');
        return 'winner = player';
    }
    if (computerScore === 3) {
        alert('Computer wins!');
        return 'winner = computer';
    }
}


const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', game)