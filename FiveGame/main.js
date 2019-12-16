'use strict'
window.addEventListener('load',()=>{

    const endDate=document.querySelector("input[name='endDate']");
    //console.log(endDate);
    let timeinverval;
    let timeStop=true;
    const savedValue=localStorage.getItem('countdown') || false;
    if(savedValue){
        startClock(savedValue);
        let inputValue=new Date(savedValue);
        //console.log(inputValue);
        endDate.valueAsDate=inputValue;
    }
endDate.addEventListener('change',(e)=>{
e.preventDefault();
clearInterval(timeinverval);
//console.log(endDate.value);
const temp=new Date(endDate.value);
//console.log(temp);
localStorage.setItem('countdown',temp);
startClock(temp);
timeStop:false;
});

function startClock(d){
    function updateCounter(){
    let tl=(timeLeft(d));
    if(tl.total<=0){
        timeStop=false; // para el contador si es - a 0
    }
    //console.log(tl);
    for(let pro in tl){ // FOR IN
        //console.log(tl[pro]);
        let el=document.querySelector("."+pro); 
        
        if(el){
           // console.log(el);
            el.innerHTML=+tl[pro]+' ';
        }
    }
    //clock.innerHTLM=tl.days+' ' +tl.hours;
}
updateCounter();
if(timeStop){
    timeinverval=setInterval(updateCounter,1000);
}else{
    clearInterval(timeinverval);
}

}

function timeLeft(d) {
    let currentDate = new Date();
    //console.log(Date.parse(d));
    //console.log(currentDate);
    //console.log(Date.parse(currentDate));
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
    let t = Date.parse(d) - Date.parse(currentDate);
    //console.log(t);
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            "total": t
            , "days": days
            , "hours": hours
            , "minutes": minutes
            , "seconds": seconds
        };
    }


}); // para que tome los eventos querys selectoe