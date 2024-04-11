var boxes = document.getElementsByClassName("box");
let n = document.querySelector(".box");
var turn = true;

let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],[2,4,6]];

for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener("click" , () => {
        if(turn){
            boxes[i].innerText = "X";
            turn = false;
        }
        else{
            boxes[i].innerText = "O";
            turn = true;
        }
    })
}