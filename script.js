 
      
     


     
 


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreDisplay = document.querySelector(".user_score");
const compScoreDisplay = document.querySelector(".comp_score");
const message = document.querySelector(".strike");

const choicesArray = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.querySelector("img").classList[0];
    const compChoice = getComputerChoice();
    determineWinner(userChoice, compChoice);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
}

function determineWinner(userChoice, compChoice) {
  if (userChoice === compChoice) {
    message.textContent = `It's a draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    message.textContent = `You win! ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScoreDisplay.textContent = compScore;
    message.textContent = `You lose! ${compChoice} beats ${userChoice}`;
  }
}

  
  
  
