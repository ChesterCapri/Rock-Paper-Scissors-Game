



    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    const humanChoice = document.querySelector(".humanChoice");
    const compChoice = document.querySelector(".compChoice")
    const result = document.querySelector(".result")


    let humanAnswer = "";
    let compAnswer = "";
    


    function updateChoice(text) {
        humanChoice.textContent = text;
    }

    

    function getComputerChoice() {
        let rps = ["rock", "paper", "scissors"];
        let random = Math.floor(Math.random() * rps.length);

        compAnswer = rps[random]

        setTimeout(() => {
            compChoice.textContent = `The Computer chose ${compAnswer}`;
            checkForTie()
        }, 1000 );
      }
  
      

    function checkForTie() {
        if (compAnswer === humanAnswer) {
            result.textContent = "It's a TIE.";
            console.log("It's a TIE.");
        }else {
            result.textContent = "";
        }
    }
    



    rock.addEventListener("click", () => {
        humanAnswer = 'rock'
        updateChoice("You chose Rock");
        getComputerChoice()
    });

    paper.addEventListener("click", () => {
        humanAnswer = 'paper'
        updateChoice("You chose Paper");
        getComputerChoice()
    });

    scissors.addEventListener("click", () => {
        humanAnswer = 'scissors'
        updateChoice("You chose Scissors");
        getComputerChoice()
    });



 






/*  //...and then the outcomes.
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


console.log("Thanks for playing! Final scores:");
console.log(`You: ${humanScore}`);

    */