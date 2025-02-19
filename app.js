let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset_button");

let newGameButton = document.querySelector("#new_btn");

let msgContainer = document.querySelector(".msg-container");
let drawContainer = document.querySelector(".draw_container");

let msg = document.querySelector("#msg");


let turnO = true//player X, playerO

// putting the condition for DRAW
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        // each time a new button is clicked, count variable would be incremented.
        count++;

        checkWinner();
    })
})

let drawVariable = true;

const checkWinner = () =>{
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);

                showWinner(pos1Val);
                drawVariable = false;
            }
        }
    }

    // If no winner and all boxes are filled, declare draw
    if (count === 9 && drawVariable === true) {
        checkDraw();
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkDraw = () => {
    document.querySelector(".draw-container").classList.remove("hide2");
    document.getElementById("draw").innerText = "It's a Draw!";
    disableBoxes();
};


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

    
}






newGameButton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

