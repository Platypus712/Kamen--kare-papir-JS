const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDislay = document.getElementById("result");
const options = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

options.forEach((option) =>
  option.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * options.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "kamen";
  }
  if (randomNumber === 2) {
    computerChoice = "škare";
  }
  if (randomNumber === 3) {
    computerChoice = "papir";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Nikola je super hehe";
  }
  if (computerChoice == "kamen" && userChoice == "škare") {
    result = "Nemaš pojma :(";
  }
  if (computerChoice == "kamen" && userChoice == "papir") {
    result = "EZ W :)";
  }
  if (computerChoice == "papir" && userChoice == "škare") {
    result = "EZ W :)";
  }
  if (computerChoice == "papir" && userChoice == "kamen") {
    result = "Nemaš pojma :(";
  }
  if (computerChoice == "škare" && userChoice == "kamen") {
    result = "EZ W :)";
  }
  if (computerChoice == "škare" && userChoice == "papir") {
    result = "Nemaš pojma :(";
  }
  resultDislay.innerHTML = result;
}
