let userChosen;
let computerChosen;
let userScore = 0;
let computerScore=0;
const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");
var result = results();

function refresh(){
  window.location.reload("Refresh")
}

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e)=> {
  userChosen = e.target.id
  generatedComputerChoice()
  console.log(computerChosen);
  results()
  userChoice.innerHTML = userChosen;
  computerChoice.innerHTML = computerChosen;
  displayResult.innerHTML = result;
  userScoreElement.innerHTML = userScore;
  computerScoreElement.innerHTML = computerScore;
  
}))

function generatedComputerChoice(){
  const randomNumber = Math.round(Math.random()*(3));
  if(randomNumber <= 1){
    console.log(randomNumber);
    return computerChosen = '🌑rock';
  }else if(randomNumber <= 2){
    console.log(randomNumber);
    return computerChosen = '🧾paper';
  }
  else if (randomNumber <= 3){
    console.log(randomNumber);
    return computerChosen = '✂scissors'
  }
}

//get results
function results(){
  if(computerChosen === userChosen){
    return result = '🏳 It is a Tie ';
  }else if(computerChosen === '🌑rock'&& userChosen === '✂scissors'){
    computerScore+=1;
    return result = '🙈 You lost';
  }else if(computerChosen === '🌑rock'&& userChosen === '🧾paper'){
    userScore+=1;
    return result = '😎 You win';
  }else if(computerChosen === '🧾paper'&& userChosen === '🌑rock'){
    computerScore+=1;
    return result = '🙈 You lost';
  }else if(computerChosen === '🧾paper'&& userChosen === '✂scissors'){
    userScore+=1;
    return result = '😎 You win';
  }else if(computerChosen === '✂scissors'&& userChosen === '🧾paper'){
    computerScore+=1;
    return result = '🙈 You lost';
  }else if(computerChosen === '✂scissors'&& userChosen === '🌑rock'){
    userScore+=1;
    return result = '😎 You win';  
  }
}