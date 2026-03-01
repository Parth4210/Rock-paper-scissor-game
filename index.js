const btns = document.querySelectorAll(".btn");
const divResult = document.getElementById("round-result");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomVal = Math.floor(Math.random() * 3);
    if (randomVal === 0) return "rock";
    if (randomVal === 1) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        divResult.textContent = `Draw! Both chose ${humanChoice}`;
        divResult.className = "result draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        divResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
        divResult.className = "result win";
        humanScore++;
    } else {
        divResult.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
        divResult.className = "result lose";
        computerScore++;
    }
}

function checkWinner() {
    if (humanScore === 5) {
        divResult.textContent = "CONGRATULATIONS! You won the game!";
        divResult.className = "result win final";
        disableButtons();
    } else if (computerScore === 5) {
        divResult.textContent = "GAME OVER! The Computer won.";
        divResult.className = "result lose final";
        disableButtons();
    }
}

function disableButtons() {
    btns.forEach(btn => btn.disabled = true);
}

btns.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const playerSelection = button.id;
        playRound(playerSelection, computerSelection);
        playerScoreEl.textContent = humanScore;
        computerScoreEl.textContent = computerScore;
        checkWinner();
    });
});