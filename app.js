let userChosen;
let computerChosen;
const randomNumber = Math.round(Math.random()*(3));
const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
var result = results();

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click', (e)=> {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userChosen;
  computerChoice.innerHTML = computerChosen;
  displayResult.innerHTML = result;

}))

function generatedComputerChoice(){
  if(randomNumber === 1){
    console.log(randomNumber);
    return computerChosen = 'rock';
  }else if(randomNumber === 2){
    console.log(randomNumber);
    return computerChosen = 'paper';
  }
  else if (randomNumber === 3){
    console.log(randomNumber);
    return computerChosen = 'scissors'
  }
}

//get results
function results(){
  if(computerChosen === userChosen){
    return result = 'It is a Tie';
  }else if(computerChosen === 'rock'&& userChosen === 'scissors'){
    return result = 'You lost';
  }else if(computerChosen === 'rock'&& userChosen === 'paper'){
    return result = 'You win';
  }else if(computerChosen === 'paper'&& userChosen === 'rock'){
    return result = 'You lost';
  }else if(computerChosen === 'paper'&& userChosen === 'scissors'){
    console.log('You win');
    return result = 'You win';
  }else if(computerChosen === 'scissors'&& userChosen === 'paper'){
    return result = 'You lost';
  }else if(computerChosen === 'scissors'&& userChosen === 'rock'){
    return result = 'You win';  
  }
}