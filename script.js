gameMoves = ['rock', 'paper', 'scissors'];

getComputerChoice = () => {
    let choice = Math.floor(Math.random(1)*3);
    let move = gameMoves[choice];
    return move;
};


let playerChoice = prompt('Please choose: Rock, Paper or Scissors');

let computerMove = getComputerChoice();
let playerMove = playerChoice

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
console.log(playRound(computerMove, playerMove))

/*computerChoice = getComputerChoice();
console.log(getComputerChoice());


*/