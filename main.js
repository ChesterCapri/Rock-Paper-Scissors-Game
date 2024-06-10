

//gets random computer option.
function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * rps.length);
    return rps[random]; 
  }



//gets players input.
function getHumanChoice() {
   let choice = prompt("Choose either Rock, Paper, or Scissors. Can you beat the computer? Lets find out! (or type 'quit' to stop playing)").toLowerCase();
   while (choice !== "rock" && choice !== "paper" && choice !== "scissors" && choice !== "quit") {
    choice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors. (or type 'quit' to stop playing)").toLowerCase();
    }
    return choice;
}


 // Initialize scores
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

while (true) {
    const humanChoice = getHumanChoice();
    if (humanChoice === "quit") {
        break;
    }


const compChoice = getComputerChoice();
    
    console.log(`The computer chooses ${compChoice}.`);
    console.log(`You chose ${humanChoice}.`);
    


 //coding a tie.
 if (compChoice === humanChoice) {
    console.log("It's a TIE.");
 }


 //...and then the outcomes.
else if (
    (humanChoice === "rock" && compChoice === "scissors") ||
    (humanChoice === "scissors" && compChoice === "paper") ||
    (humanChoice === "paper" && compChoice === "rock")
) {
    console.log("You WIN!");
    humanScore++;
    }
    else {
        console.log("You LOSE!");
        computerScore++
    }

    rounds++;
    
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    console.log(`Rounds played: ${rounds}`);
}

console.log("Thanks for playing! Final scores:");
console.log(`You: ${humanScore}`);

