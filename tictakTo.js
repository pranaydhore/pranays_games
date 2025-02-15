let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#Reset-Game");
let newbtn=document.querySelector("#New-Game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,6,8],
    [2,4,6],
    [2,1,0],
    [3,4,6],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enablebtn();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        } else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        chechWinner();
    });
});

const disablebtn=()=>{
    for(let box of boxes) {
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disablebtn();
}

const chechWinner=()=>{
    for(let pattern of winPattern) {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let posiVal1=boxes[pattern[0]].innerText;
        let posiVal2=boxes[pattern[1]].innerText;
        let posiVal3=boxes[pattern[2]].innerText;

        if(posiVal1!=""&&posiVal1!=""&&posiVal3!="") {
            if(posiVal1===posiVal2&& posiVal2===posiVal3) {
                console.log("Winner",posiVal1);
                showWinner(posiVal1);
            }
        }
    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);