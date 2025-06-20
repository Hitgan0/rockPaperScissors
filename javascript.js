function getCompChoice() {
    randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            winOrLose.textContent = "You lost D:"
            compWon++;
            compScore.textContent = compWon;
        } else if (computerChoice == "scissors") {
            winOrLose.textContent = "You won :D";
            humanWon++;
            humanScore.textContent = humanWon;
        } else if (computerChoice == "rock") {
            winOrLose.textContent = "You tied :|";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            winOrLose.textContent = "You lost D:";
            compWon++;
            compScore.textContent = compWon;
        } else if (computerChoice == "rock") {
            winOrLose.textContent = "You won :D";
            humanWon++;
            humanScore.textContent = humanWon;
        } else if (computerChoice == "paper") {
            winOrLose.textContent = "You tied :|";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            winOrLose.textContent = "You lost D:";
            compWon++;
            compScore.textContent = compWon;
        } else if (computerChoice == "paper") {
            winOrLose.textContent = "You won :D";
            humanWon++;
            humanScore.textContent = humanWon;
        } else if (computerChoice == "scissors") {
            winOrLose.textContent = "You tied :|";
        }
    }

    if (humanWon >= 5 || compWon >= 5) {
        const gameOver = document.createElement("div");
        gameOver.textContent = "<<< GAME OVER - refresh page to play again >>>";
        document.body.appendChild(gameOver);
    }

    return;
}

const winOrLose = document.querySelector(".winOrLose");
const humanScore = document.querySelector(".humanScore");
const compScore = document.querySelector(".compScore");

let gamesPlayed = 0;
let humanWon = 0;
let compWon = 0;

const rockB = document.querySelector(".rockBtn");
rockB.addEventListener("click", () => {
    playRound("rock", getCompChoice());
    gamesPlayed++;
});

const paperB = document.querySelector(".paperBtn");
paperB.addEventListener("click", () => {
    playRound("paper", getCompChoice());
    gamesPlayed++;
});

const scissorsB = document.querySelector(".scissorsBtn");
scissorsB.addEventListener("click", () => {
    playRound("scissors", getCompChoice());
    gamesPlayed++;
});