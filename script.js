'use strict';

let answer= Math.floor(Math.random()*30)+1; //secret number
let score=20; // total chances
let highScore=0;

document.querySelector('.number').textContent='?';


//when player gives an input
document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent='Enter some number';
    }
    //if answer matches the secret number
    else if(guess === answer){                          
        document.querySelector('.message').textContent='🎊Hurrah! You guessed it.';
        document.querySelector('.number').textContent=answer;
        document.querySelector('body').style.backgroundColor='#61E1AC';   //'#23FFA5';
        document.querySelector('.number').style.width='30rem';

        //update highscore
        if(score>highScore){
            document.querySelector('.message').textContent="🎊Hurrah! You guessed it.(✨New Highscore)";
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    else if(guess!=answer){
        if(score>0)
        {
            if(guess>answer && Math.abs(answer-guess)<8)
                document.querySelector('.message').textContent='😬 Bit High';

            else if(guess>answer)
                document.querySelector('.message').textContent='🥵 Too High' ;

            else if(guess<answer && Math.abs(answer-guess)<8)
                document.querySelector('.message').textContent='😬 Bit Low';

            else if(guess<answer)
                document.querySelector('.message').textContent='🥶 Too Low';
            
            score--;
        }
        else{   //if score becomes zero
            score=0;
            document.querySelector('.message').textContent='💀 OOPS! You are out of turns!'
        }
        
        }

    document.querySelector('.score').textContent=score;
});

//reset game
document.querySelector('.again').addEventListener('click', function(){
    score=20;
    answer= Math.floor(Math.random()*30)+1; // assign new secret number
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width='15rem';
});

const dialog= document.querySelectorAll('.modal'); //dialog box 
const overlay= document.querySelector('.overlay'); //overlay for background blurr
const btnDialog = document.querySelectorAll('.btn2'); //dialog show buttons
const closeDialog= document.querySelectorAll('.close-modal'); //dialog close button


//close dialog if escape key is pressed
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape')
    {
        if(!dialog[1].classList.contains('hidden'))
            hideDialog2();
        
        if(!dialog[0].classList.contains('hidden'))
            hideDialog1();
    }
})

//Show Game rules dialog
const showDialog1=function(){
    dialog[0].classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Show Contact us dialog
const showDialog2=function(){
    dialog[1].classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Hide Game rules dialog
const hideDialog1=function(){
    dialog[0].classList.add('hidden');
    overlay.classList.add('hidden');
}
//Hide Contact us dialog
const hideDialog2=function(){
    dialog[1].classList.add('hidden');
    overlay.classList.add('hidden');
}

//On Rules button clicked
btnDialog[0].addEventListener('click',function(){
    if(!dialog[1].classList.contains('hidden'))
        hideDialog2();
    
    showDialog1();
});

//On ContactUs button clicked
btnDialog[1].addEventListener('click',function(){
    if(!dialog[0].classList.contains('hidden'))
        hideDialog1();
    
    showDialog2();
});

//On Rules close button clicked
closeDialog[0].addEventListener('click',function(){
    hideDialog1();
});
//On ContactUs close button clicked
closeDialog[1].addEventListener('click',function(){
    hideDialog2();
});

//close dialog on overlay click
overlay.addEventListener('click',function(){
    if(!dialog[0].classList.contains('hidden'))
        dialog[0].classList.add('hidden');
    
    if(!dialog[1].classList.contains('hidden'))
        dialog[1].classList.add('hidden');
    overlay.classList.add('hidden');
});


    

