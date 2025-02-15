let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userPara=document.querySelector("#user");
const comPara=document.querySelector("#computer");


const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option [randIdx];

};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) {
        userScore++;
        userPara.innerText=userScore;
        console.log("you win !");
        msg.innerText=`You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        comPara.innerText=compScore;
        console.log("you lose !");
        msg.innerText=`You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
const drawGame=()=>{
    console.log("Game is Draw.");
    msg.innerText="Game is Draw. Play Again !";
}
const playGame=(userChoice)=>{
    console.log("choice choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice) {
        drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock") {
            userWin=compChoice==="paper"? false:true;
        } else if(userChoice==="paper") {
            userWin=compChoice==="scissor"? false:true;
        } else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });

});