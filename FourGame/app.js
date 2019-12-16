'use strict'
window.addEventListener('load',()=>{

const message=document.querySelector(".message");
const guess=document.querySelector("input");
const button=document.querySelector("button");
const puntajed=document.querySelector(".puntaje");
let inplay=false;
let scramble="";
let scrambled="";
let score=0;
let puntaje=0;
const myArray=
['javascript','website','html','document','course','php','java','kotlin','docker','angular','react','framework'];
button.addEventListener('click',()=>{
if(!inplay){
inplay=true;
score=0;
button.innerHTML="Intentar"; 
guess.classList.toggle("hidden");
scramble=createWord();
scrambled= randomArray(scramble.split("")).join("");
message.innerHTML=scrambled;
console.log(createWord());
puntajed.innerHTML= "Haz acertado: "+puntaje;
}else{
    let tempGuess=guess.value;
    score++;
    //console.log(tempGuess);
    if(tempGuess===scramble){
        console.log("correct");
        puntaje++;
        inplay=false
        message.innerHTML="Correcto era: "+ scramble+' lo lograste en '+score+' intentos';
        button.innerHTML="Empezar";
        guess.classList.toggle("hidden");
        guess.value="";
    }else{
        console.log("¿Intentar de nuevo?");
        message.innerHTML="Equivocado, intenta de nuevo: "+ scrambled;
    }
}

});
function createWord(){

    let randomIndex=Math.floor(Math.random()* myArray.length);
    
    let tempWord= myArray[randomIndex];

    let rand = randomArray(tempWord.split("")); // te pone en un array todos los elementos del array principal
    return tempWord;
}
function randomArray(arr){
for(let i=arr.length-1; i>0;i--){
    let temp=arr[i];
    let j =Math.floor(Math.random()*(i+1)); // da un nuevo index
   /* console.log(temp)
    console.log(i); 
    console.log(j); // vemos el nuevo index por consola*/
    arr[i]=arr[j];
    arr[j]=temp;   // pone el valor de arr[j] en el array temporario que pusimos arriba..
}
return arr;
}


});