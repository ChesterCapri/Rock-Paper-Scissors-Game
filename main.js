



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
            compChoice.textContent = `The Computer chose ${compAnswer.charAt(0).toUpperCase() + compAnswer.slice(1)}`;
            checkResults()
        }, 1000 );
      }
  
      

    function checkResults() {
        if (compAnswer === humanAnswer) {
            result.textContent = "It's a TIE.";
            console.log("It's a TIE.");
        }
        else if (
            (humanAnswer === "rock" && compAnswer === "scissors") ||
            (humanAnswer === "scissors" && compAnswer === "paper") ||
            (humanAnswer === "paper" && compAnswer === "rock")
        ) {
            result.textContent = "You Win!!!";
            console.log("You WIN!");
        }else {
            result.textContent = "You Loose!!!";
            console.log("You LOSE!");
                
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



 







