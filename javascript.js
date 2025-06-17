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
            return false;
        } else if (computerChoice == "scissors") {
            console.log("You won :D");
            return true;
        } else if (computerChoice == "rock") {
            console.log("You tied :|");
            return null;
        }
    } else if (humanChoice == "paper") {

        if (computerChoice == "scissors") {
            console.log("You lost D:");
            return false;
        } else if (computerChoice == "rock") {
            console.log("You won :D");
            return true;
        } else if (computerChoice == "paper") {
            console.log("You tied :|");
            return null;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lost D:");
            return false;
        } else if (computerChoice == "paper") {
            console.log("You won :D");
            return true;
        } else if (computerChoice == "scissors") {
            console.log("You tied :|")
            return null;
        }
    }
    return;
}



humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);



