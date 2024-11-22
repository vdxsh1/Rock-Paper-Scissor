let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

updateScoreElement();

function playGame(playerMove) {

  const computerMove = pickComputerMove();

let result = '';
if (playerMove==='scissor') {
  if (computerMove === 'rock') { result = 'you lose';}
 else if (computerMove === 'paper') { result = 'you win';}
 else if (computerMove === 'scissor') { result = 'tie';}
}

 else if (playerMove==='paper') {
  if (computerMove === 'rock') { result = 'you win';}
 else if (computerMove === 'paper') { result = 'tie';}
 else if (computerMove === 'scissor') { result = 'you lose';}

}

else if (playerMove==='rock') {
  if (computerMove === 'rock') { result = 'tie';}
 else if (computerMove === 'paper') { result = 'you lose';}
 else if (computerMove === 'scissor') { result = 'you win';}
}

if (result ==='you win') {
  score.wins += 1;
}
else if (result==='you lose') {
  score.losses += 1;
}
else if (result==='tie') {
  score.ties += 1;
}

updateScoreElement();

localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You : <img class="move-display" src="images/${playerMove}.png"><img class="move-display" src="images/${computerMove}.png">: Computer`
}

function updateScoreElement() {
  document.querySelector('.js-button').innerHTML = `Wins: ${score.wins}   Losses: ${score.losses}   Ties: ${score.ties}`;
}


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
if ( randomNumber>=0 && randomNumber <1/3)
{
  computerMove = 'rock';
}
else if (randomNumber>=1/3 && randomNumber < 2/3)
{
  computerMove = 'paper';
}
else if ( randomNumber >= 2/3 && randomNumber < 1) 
  {
    computerMove = 'scissor';
  }
return computerMove;
}