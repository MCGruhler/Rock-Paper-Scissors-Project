function getComputerChoice(){
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    let choice = getRandomInt(3);
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1){
        return 'scissors'
    }else {
        return 'paper'
    }
}

let computerChoice = (getComputerChoice());

let playersChoice;


    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        console.log(playRound('rock', getComputerChoice()));
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        console.log(playRound('paper', getComputerChoice()));
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        console.log(playRound('scissors', getComputerChoice()));
    });

    let userScore = 0;
    let computerScore = 0;
    let tieScore = 0;



    function playRound(playersChoice, computerChoice){
        if (userScore === 5) {
            alert("Wow you won!!!!");
            userScorePara.textContent = (userScore = 0);
            computerScorePara.textContent = (computerScore = 0);
            tieScorePara.textContent = (tieScore =0);
        } else if (computerScore === 5){
            alert("The computer won, try-again!");
            userScorePara.textContent = (userScore = 0);
            computerScorePara.textContent = (computerScore = 0);
            tieScorePara.textContent = (tieScore =0);
        } else {
                switch (playersChoice) {
                    case "rock":
                        if (computerChoice === "scissors"){
                            userScorePara.textContent = (++userScore);
                            return userScore;
                        } else if (computerChoice === "paper") {
                            computerScorePara.textContent = (++computerScore);
                            return computerScore;
                        } else {
                            tieScorePara.textContent = (++tieScore);
                            break;

                        }
                    case "scissors":
                        if (computerChoice === "paper"){
                            userScorePara.textContent = (++userScore);
                            return userScore;
                        } else if (computerChoice === "rock") {
                            computerScorePara.textContent = (++computerScore);
                            return computerScore;
                        } else {
                            tieScorePara.textContent = (++tieScore);
                            break;
                        }
                    case "paper":
                        if (computerChoice === "scissors"){
                            userScorePara.textContent = (++userScore);
                            return userScore;
                        } else if (computerChoice === "paper") {
                            computerScorePara.textContent = (++computerScore);
                            return computerScore;
                        } else {
                            tieScorePara.textContent = (++tieScore);
                            break;
                        }
                    default:
                        return "Something went wrong . . . "
                }
        }
    }

        const scoreboard = document.querySelector('.scoreboard');

        const userScorePara = document.querySelector('.wins');

        const computerScorePara = document.querySelector('.losses');

        const tieScorePara = document.querySelector('.ties');

        userScorePara.setAttribute('style', " text-align: center; font-size: 1.2rem; background-color:white; color:red; width:5vh; border: 2px red dotted;");
        computerScorePara.setAttribute('style', " text-align: center; font-size: 1.2rem; background-color:white; color:red; width:5vh; border: 2px red dotted;");
        tieScorePara.setAttribute('style', " text-align: center; font-size: 1.2rem; background-color:white; color:red; width:5vh; border: 2px red dotted;");

