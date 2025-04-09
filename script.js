
const randomNumber=(parseInt(Math.random()*100 + 1));
const submit=document.querySelector('#sbt');
const input=document.querySelector('#guessField');
const guess=document.querySelector('#guesses');
const remaining=document.querySelector('.lastResult');
const lowhigh=document.querySelector('.lowerhi');
const startOver=document.querySelector('.resultparas')

const p=document.createElement('p');

let prevGuess = []
let numguess=1;
let playgame=true;

if(playgame){
     submit.addEventListener('click',function(event){
          event.preventDefault();
          const gu=parseInt(input.value);
          console.log(gu);
          validateguess(gu);
     })
}

function validateguess(guess){
     // check
     
}

function checkguess(guess){

}

function displayguess(guess){

}
function diaplymessage(Message){

}

function newGame(){
      
}