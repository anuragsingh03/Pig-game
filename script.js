'use-strict';
//selecting element
const player0E1=document.querySelector('.player--0');
const player1E1=document.querySelector('.player--1');
const current0E1=document.getElementById('current--0');
const current1E2=document.getElementById('current--1');

const score0E1=document.querySelector('#score--0');
const score1E1=document.getElementById('score--1');
const diceE1=document.querySelector('.dice');
const btnRoll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const btnNew=document.querySelector('.btn--new');
//initial setup
let activeplayer,currentScore,playing,score;
const initalize=function()
{


 activeplayer=0;
 currentScore=0;
 score=[0,0];
 playing=true;

current0E1.textContent=0;
current1E2.textContent=0;
score0E1.textContent=0;
score1E1.textContent=0;

diceE1.classList.add('hidden');
player0E1.classList.add('player--active');
player1E1.classList.remove('player--active');
player0E1.classList.remove('player--winner');
player1E1.classList.remove('player--winner');
}

initalize();



const switchplayer=function()
{
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer=activeplayer===0 ? 1: 0 ;
    currentScore=0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
}

//rolling dice functionality
btnRoll.addEventListener('click',function()
{
   if(playing)
   {
        //1.generating a random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    //2.display dice
    diceE1.classList.remove('hidden');
    diceE1.src=`dice-${dice}.png`;
    //check for rolled1
    if(dice!=1)
    {//add dice to current score
        currentScore+=dice;
document.getElementById(`current--${activeplayer}`).textContent=currentScore;

    }
    else{
        //true switch to next player
        switchplayer();
       


    }
   }
});
btnhold.addEventListener('click',function(){
  if(playing)
  {
        //1.add current score to active player score
    score[activeplayer]+=currentScore;
    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    //2.check if player's score is >=100
    //finish game
    if(score[activeplayer]>=100)
    {
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        diceE1.classList.add('hidden');
        playing=false;
        
    }
    else{
        //3.switch the user
    switchplayer();

    }
  }
    
});
// btnNew.addEventListener('click',function(){
//     initalize();
// })
//alternate

btnNew.addEventListener('click',initalize);

