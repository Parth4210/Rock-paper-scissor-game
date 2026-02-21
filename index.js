console.log("Welcome to the rock, paper, scissors game");

// Function to generate a choice for the computer for the game.
function getComputerChoice() {
    // 0 - rock, 1 - paper, 2 - scissors
    randomVal = Math.floor(Math.random() * 3)
    if (randomVal == 0) {
        return "rock"
    }
    else if (randomVal == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

// Function to input the choice of the user for the game
function getHumanChoice() {
    // 0 - rock, 1 - paper, 2 - scissors
    let a = prompt("Enter your choice(rock/paper/scissors): ")
    if (a.toLowerCase() == "rock") {
        return "rock"
    }
    else if (a.toLowerCase() == "paper") {
        return "paper"
    }
    else {
        return "scissors"
    }
}

// As the game is to be played round by round, so this function will initiate the new round between the computer and the player 
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Draw!")
        }
        else if (computerChoice == "paper") {
            console.log("You Lose! Paper beats rock")
            ComputerScore++
        }
        else {
            console.log("You won! Rock beats scissors")
            humanScore++
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You won! Paper beats rock")
            humanScore++
        }
        else if (computerChoice == "paper") {
            console.log("Draw!")
        }
        else {
            console.log("You lose! Scissors beat paper")
            ComputerScore++
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log("You lost! rock beats scissors")
            ComputerScore++
        }
        else if (computerChoice == "paper") {
            console.log("You won! Scissors beat paper")
            humanScore++
        }
        else {
            console.log("Draw!")
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection)
    }
}

let ComputerScore = 0
let humanScore = 0


playGame()

console.log("Computer Score: " + ComputerScore)
console.log("Human Score: " + humanScore)

if(ComputerScore>humanScore){
    console.log("Computer won!")
}
else if(humanScore>ComputerScore){
    console.log("Player won!");
}
else{
    "It was a draw!"
}