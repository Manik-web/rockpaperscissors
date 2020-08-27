let choices = ['Rock','Paper','Scissors'];
let computerPlay = () =>{
    let compChoice = choices[Math.round(Math.random()*choices.length)];
    return compChoice;
        }


        
let playRound =(playerSelection, compSelection)=>{
    let message = '';
    
    if (compSelection===playerSelection){
        message = "It's a draw";
        }else if(compSelection==='rock'){
            if (playerSelection==='paper'){
                message ='You win';
                } else{
                    message ='You lose!';
                    }
        } else if(compSelection ==="paper"){
            if(playerSelection=== 'rock'){
                message ='You lose';
                } else {
                    message ='You lose';
        }}else if (compSelection === 'scissors'){
            if(playerSelection==='rock'){
                message ='You win!';
            } else{message ='You Lose';}
        } return message;
        }
let playerInput = 'Rock';
let compInput=computerPlay();
let compSelection= compInput.toLowerCase();
let playerSelection= playerInput.toLowerCase();


console.log(`You chose ${playerSelection} and the comp chose ${compSelection}...${playRound(playerSelection,compSelection)}`);