let choices = ['Rock','Paper','Scissors'];
        let computerPlay = () =>{
            let compChoice = choices[Math.round(Math.random()*choices.length)];
            console.log(compChoice);
        }
        computerPlay();