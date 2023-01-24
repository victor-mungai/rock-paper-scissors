let paper = document.querySelector(".icon_paper");
let paperImg = document.querySelector(".paper");
let rock = document.querySelector(".icon_rock");
let rockImg = document.querySelector(".rock")
let scissors = document.querySelector(".icon_scissors");
let scissorsImg = document.querySelector(".scissors");
let triangleImg = document.querySelector(".bg-triangle");
let scoreNumber = document.querySelector(".score_number");
let count = 0;
scoreNumber.textContent = localStorage.getItem("count",count);
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
gameLogic(selectedList.scissors,paperSelected,"YOU LOOSE");
gameLogic(selectedList.paper,rockSelected,"YOU LOOSE");
gameLogic(selectedList.rock,rockSelected,"A DRAW");
gameLogic(selectedList.scissors,rockSelected,"YOU WIN");
gameLogic(selectedList.paper,scissorsSelected,"YOU WIN");
gameLogic(selectedList.rock,scissorsSelected,"YOU LOOSE");
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
  if(status === "YOU WIN"){
    count++;
  }
  if(status ==="YOU LOOSE"){
    count--;
  }
  let playAgain = document.querySelector(".play_again");
  playAgain.addEventListener("click", function(){
        window.location.reload(); 
  });
  
  }
  localStorage.setItem("count",count);
  console.log(count);
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