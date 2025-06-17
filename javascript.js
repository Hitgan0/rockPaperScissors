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
    console.log(choice);
}

getHumanChoice();

