gameMoves = ['rock', 'paper', 'scissors'];

getComputerChoice = () => {
    let choice = Math.floor(Math.random(1)*3);
    let move = gameMoves[choice];
    return move;
};



const getPlayerChoice = () => {
    let choice = prompt('Please choose: Rock, Paper or Scissors');
    choice = choice.toLowerCase();
    if (choice.toLowerCase() != 'rock' && choice.toLowerCase()!= 'scissors' && choice.toLowerCase()!= 'paper') {
        alert('Please make sure you have spelled your choice correctly');
        choice = prompt('Please choose: Rock, Paper or Scissors');

    } else {
        return choice;
    }
};


let computerMove = getComputerChoice();
let playerMove = getPlayerChoice();



console.log('Computer chose ' + computerMove);

playRound = (computer, player) => {
    if(computerMove == playerMove) {
        return "its a tie"
    } else if (
        playerMove == 'rock' && computerMove == 'scissors') {
            return 'you win'
    } else if (
        playerMove == 'paper' && computerMove == 'rock') {
            return 'you win'
    } else if (
        playerMove == 'scissors' && computerMove == 'paper') {
            return 'you win'
    } else {
        return 'you lose'
    }
        
    
}
console.log(playRound(computerMove, playerMove));
