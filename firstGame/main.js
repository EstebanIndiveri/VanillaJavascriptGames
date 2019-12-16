'use strict'
window.addEventListener('load',()=>{ 

const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const coinArray=["Heads","Tails"];
let score=[0,0];
console.log(buttons);

for(let i=0; i<buttons.length;i-=-1){
    console.log(buttons[i]);
    buttons[i].addEventListener('click',tossCoin);
}
function tossCoin(e){
    let computerToss=Math.floor(Math.random()*coinArray.length);
    let playerGuess=e.target.innerText;
    let computerGuess=coinArray[computerToss];
    let output;
    message.innerHTML="Computer Selected"+computerGuess+"<br>";


    if(playerGuess== computerGuess){
        output="Player Wins";
        //win
        score[0]++;
    }else{
        output="Computer Win";
        //loss
        score[1]++;
    }
    message.innerHTML+=output+ '<p><br> Player  '+ score[0]+'   '+'    Computer  '+ score[1]+"</p>";
};


}); // no tocar perri