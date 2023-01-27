let paper = document.querySelector(".icon_paper");
let paperImg = document.querySelector(".paper");
let rock = document.querySelector(".icon_rock");
let rockImg = document.querySelector(".rock")
let scissors = document.querySelector(".icon_scissors");
let scissorsImg = document.querySelector(".scissors");
let triangleImg = document.querySelector(".bg-triangle");
let rulesBtn = document.querySelector(".rules_btn");
let modalContainer = document.querySelector('.modal-container');
let closeButton = document.querySelector('.close-button');
let background = document.querySelector('body');
let scoreNumber = document.querySelector(".score_number");
let score = localStorage.getItem("score");
let count =JSON.parse(score);
scoreNumber.textContent = count;
let paperSelected = false;
let rockSelected = false;
let scissorsSelected = false;
let select = document.querySelector(".select");
let body = document.querySelector("body");
let randomNumber;
let gameStatus;
let selectedList = {
    paper:0,
    rock:1,
    scissors:2,
}
rulesBtn.addEventListener("click",function(){
  modalContainer.style.display = 'block';
  background.classList.add('blur-background');
})
closeButton.addEventListener('click', function() {
  modalContainer.style.display = 'none';
  background.classList.remove('blur-background');
});
modalContainer.addEventListener('click', function(e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
    background.classList.remove('blur-background');
  }
});

paper.addEventListener("click",function(){
    select.innerHTML = ``;
    body.innerHTML += `
    <div class="selections">
     <div class="player_pick">
        <p>You Picked</p>
        <div class="paper_selected">
        <div class="icon"> 
        <img class="paper" src="${paperImg.src}" alt="">
     </div>
    </div>
     </div>
     <div class="computer_pick">
       <p>The House Picked</p>
      
     </div>
  </div>`
  paperSelected = true;
  computerPick();
  statusUpdate();
  console.log(paperSelected);
})
function computerPick(){
    randomNumber =  Math.floor(Math.random()*3);
    if(randomNumber === selectedList.paper){
      let computerChoice = document.querySelector(".computer_pick");
      computerChoice.innerHTML += `<div class="paper_selected">
      <div class="icon"> 
          <img class="paper" src="${paperImg.src}" alt="">
       </div>
  </div>`
    }
    if(randomNumber === selectedList.rock){
      let computerChoice = document.querySelector(".computer_pick");
      computerChoice.innerHTML += `<div class="rock_selected">
      <div class="icon"> 
          <img class="rock" src="${rockImg.src}" alt="">
       </div>
  </div>`
    }
    if(randomNumber === selectedList.scissors){
      let computerChoice = document.querySelector(".computer_pick");
      computerChoice.innerHTML += `<div class="scissors_selected">
      <div class="icon"> 
          <img class="scissors" src="${scissorsImg.src}" alt="">
       </div>
  </div>`
    }
    
}
function statusUpdate(){
gameLogic(selectedList.paper,paperSelected,"A DRAW");
gameLogic(selectedList.rock,paperSelected,"YOU WIN");
gameLogic(selectedList.scissors,paperSelected,"YOU LOSE");
gameLogic(selectedList.paper,rockSelected,"YOU LOSE");
gameLogic(selectedList.rock,rockSelected,"A DRAW");
gameLogic(selectedList.scissors,rockSelected,"YOU WIN");
gameLogic(selectedList.paper,scissorsSelected,"YOU WIN");
gameLogic(selectedList.rock,scissorsSelected,"YOU LOSE");
gameLogic(selectedList.scissors,scissorsSelected,"A DRAW");
}
function gameLogic(selected,active,status,playerNumber){
  if(randomNumber === selected && active === true){
    body.innerHTML += `<div class="game_info">
    <div class="status animate__animated animate__slideInDown">
      ${status}
    </div>
    <div >
       <button class="play_again">PLAY AGAIN</button>
    </div>
  </div>`
  
  let playAgain = document.querySelector(".play_again");
  playAgain.addEventListener("click", function(){
     window.location.reload();
  });
  if(status === "YOU WIN"){
    increaseScore();
      localStorage.setItem("score",count);
      
     }
     if(status ==="YOU LOSE"){
      reduceCount();
       localStorage.setItem("score",count);
     }
  }
  
}
function increaseScore(){
  count += 1;
  return count;
}
function reduceCount(){
  count -= 1;
  return count;
}
rock.addEventListener("click",function(){
    select.innerHTML = ``;
    body.innerHTML += `
    <div class="selections">
     <div class="player_pick">
        <p>You Picked</p>
        <div class="rock_selected">
        <div class="icon"> 
        <img class="rock" src="${rockImg.src}" alt="">
     </div>
    </div>
     </div>
     <div class="computer_pick">
       <p>The House Picked</p>
       
     </div>
  </div>`
  rockSelected = true;
  computerPick();
  statusUpdate();
})
scissors.addEventListener("click",function(){
    select.innerHTML = ``;
    body.innerHTML += `
    <div class="selections">
     <div class="player_pick">
        <p>You Picked</p>
        <div class="scissors_selected">
        <div class="icon"> 
        <img class="scissors" src="${scissorsImg.src}" alt="">
     </div>
    </div>
     </div>
     <div class="computer_pick">
       <p>The House Picked</p>
       
     </div>
  </div>`
  scissorsSelected = true;
  computerPick();
  statusUpdate();
})