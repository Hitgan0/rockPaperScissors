function getCompChoice() {
    randNum = Math.floor(Math.random() * 3);
    switch(randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Please enter either rock, paper, or scissors: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lost D:");
            return 0;
        } else if (computerChoice == "scissors") {
            console.log("You won :D");
            return 1;
        } else if (computerChoice == "rock") {
            console.log("You tied :|");
            return -1;
        }
    } else if (humanChoice == "paper") {

        if (computerChoice == "scissors") {
            console.log("You lost D:");
            return 0;
        } else if (computerChoice == "rock") {
            console.log("You won :D");
            return 1;
        } else if (computerChoice == "paper") {
            console.log("You tied :|");
            return -1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lost D:");
            return 0;
        } else if (computerChoice == "paper") {
            console.log("You won :D");
            return 1;
        } else if (computerChoice == "scissors") {
            console.log("You tied :|")
            return -1;
        }
    }
    return;
}

const rockB = document.querySelector(".rockBtn");
rockB.addEventListener("click", () => {
    playRound("rock", getCompChoice());
});

const paperB = document.querySelector(".paperBtn");
paperB.addEventListener("click", () => {
    playRound("paper", getCompChoice());
});

const scissorsB = document.querySelector(".scissorsBtn");
scissorsB.addEventListener("click", () => {
    playRound("scissors", getCompChoice());
});