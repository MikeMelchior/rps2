gameMoves = ['rock', 'paper', 'scissors'];

getComputerChoice = () => {
    let choice = Math.floor(Math.random(1)*3);
    let move = gameMoves[choice];
    return move;
};

const getPlayerChoice = () => {
    let choice = prompt('Please choose: Rock, Paper or Scissors');
    choice = choice.toLowerCase();
    if (choice!= 'rock' && choice!= 'scissors' && choice!= 'paper') {
        alert('Please make sure you have spelled your choice correctly');
        getPlayerChoice();
    } else {
        return choice;
    }
};

let playerScore = 0;
let computerScore = 0;

playRound = () => {

    let computerMove = getComputerChoice();
    let playerMove = getPlayerChoice();

    console.log('Computer chose: ' + computerMove + ' and you chose: ' + playerMove);
    if(computerMove == playerMove) {
        console.log('tie round');
        return "its a tie"
    } 
    if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'paper') {
            console.log('point to player')
            playerScore ++;
            return 'you win';
    } 
    else {
        console.log('point to computer')
        computerScore ++;
        return 'you lose';
    }
}


game = () => {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        console.log('player: ' + playerScore + ' computer: ' + computerScore);
        playRound();
    }
    console.log('player: ' + playerScore + ' computer: ' + computerScore);
    if (playerScore === 3){
        alert('You win!');
        return 'winner = player';
    }
    if (computerScore === 3) {
        alert('Computer wins!');
        return 'winner = computer';
    }
}























// game = () => {
//     let playerScore = 0;
//     let computerScore = 0;
//     while (computerScore != 3 && playerScore != 3) {
//         playRound();
//         console.log('Score:  comp: ' + computerScore + ' you: ' + playerScore)
//         if (playerScore == 3) {
//             alert('YOU WIN')
//             return;
//         } if (computerScore == 3) {
//             alert('YOU LOSE')
//             return;
//         }
//         if (playRound() == 'you win') {
//             playerScore ++;
//             console.log('you win, your score: ' + playerScore + ' computer score: ' + computerScore) 
//         }
//         if (playRound() == 'you lose') {
//             computerScore ++;
//             console.log('you lose, your score: ' + playerScore + ' computer score: ' + computerScore)
//         }
//     } 
// }