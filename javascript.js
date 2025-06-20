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
            // console.log("games played: ", gamesPlayed)
            return 0;
        } else if (computerChoice == "scissors") {
            winOrLose.textContent = "You won :D";
            humanWon++;
            humanScore.textContent = humanWon;
            return 1;
        } else if (computerChoice == "rock") {
            winOrLose.textContent = "You tied :|";
            return -1;
        }
    } else if (humanChoice == "paper") {

        if (computerChoice == "scissors") {
            winOrLose.textContent = "You lost D:";
            compWon++;
            compScore.textContent = compWon;

            return 0;
        } else if (computerChoice == "rock") {
            winOrLose.textContent = "You won :D";
            humanWon++;
            humanScore.textContent = humanWon;
            return 1;
        } else if (computerChoice == "paper") {
            winOrLose.textContent = "You tied :|";
            return -1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            winOrLose.textContent = "You lost D:";
            compWon++;
            compScore.textContent = compWon;
            return 0;
        } else if (computerChoice == "paper") {
            winOrLose.textContent = "You won :D";
            humanWon++;
            humanScore.textContent = humanWon;
            return 1;
        } else if (computerChoice == "scissors") {
            winOrLose.textContent = "You tied :|";
            return -1;
        }
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
    playRound("rock", "paper");
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