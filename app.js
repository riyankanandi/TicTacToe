let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=() =>{
    let turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach((box) =>{
        box.innerText = '';
     });
};

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turnO===false){
        box.innerText="O";
        turnO=true;
        }
        else{
            box.innerText="X"; 
            turnO=false;
        }
        box.disabled= true;
        checkWinner();
    });
});
const enableBoxes=() =>{
    for (let box of boxes){
        box.disabled= false;
    }
};
const disableBoxes =() =>{
    for (let box of boxes){
        box.disabled= true;
    }
};
const showWinner=(winner) =>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=() =>{
    for (pattern of winPatterns){
        
       let pos0Val=boxes[pattern[0]].innerText;
      
      let pos1Val=boxes[pattern[1]].innerText;
      let pos2Val=boxes[pattern[2]].innerText;
      if(pos0Val !="" && pos1Val !="" && pos2Val !=""){
        if(pos0Val === pos1Val && pos1Val === pos2Val){
            console.log("Winner");

            showWinner(pos1Val);
        }
      }
    }
};
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);

