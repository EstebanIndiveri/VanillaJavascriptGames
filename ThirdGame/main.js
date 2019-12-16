window.addEventListener('load',()=>{
    let audio=document.querySelector("#audio");
    const gameArea=document.querySelector(".game");
    const button=document.querySelector("button");
    const message=document.querySelector(".message");
    let gamePlay=false;

    button.addEventListener('click', function(){
        if(!gamePlay){
            gamePlay=true;
            score=0;
            gameArea.innerHTML="";
            message.style.color="black"
            message.style.marginLeft="43%";
            maker();
            message.innerHTML="Guess the combo";
            button.innerHTML="Check Combo";
        }else{
            console.log("checker");
            score++;
            message.innerHTML="Guesses "+score;
            let winCondition=0;
            const numbers=document.querySelectorAll(".numb");
            for(let i=0;i<numbers.length;i-=-1){
                if(numbers[i].value == numbers[i].correct){
                    numbers[i].style.backgroundColor="Green"
                    numbers[i].style.color="white";
                    console.log("Match")
                    winCondition++
                }else{
                    let color= (numbers[i].value < numbers[i].correct)?"blue": "red";
                    numbers[i].style.backgroundColor=color;
                    numbers[i].style.color="black";
                    console.log("No Match");
                }
                if(winCondition == numbers.length){
                    gameEnd();
                    console.log("game over");
                }
            }
        }
    });
    function gameEnd(){
        message.innerHTML="You solved the combo in "+score+" guesses";
        gamePlay=false;
        button.innerHTML="Restart Game";
        audio.play();
        console.log(audio);
        message.style.marginLeft="38%";
        message.style.color="red";
    }

    function maker(){
        for(let x=0;x<4;x++){
        let el =document.createElement("input");
        el.setAttribute("type","number")
        el.max=9;
        el.min=0;
        el.order=x;
        el.size=1;
        el.classList.add("numb");
        el.style.width="50px";
        el.style.marginBottom="5px";
        
        el.correct=Math.floor(Math.random()*10);
        el.value=0;
        console.log(el);
        gameArea.appendChild(el);
        }
        
    }
});