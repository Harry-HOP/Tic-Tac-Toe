var boxes = document.getElementsByClassName("box");
let n = document.querySelector(".box");
var cong = document.querySelector("h1");
var btn = document.querySelector(".rst-btn");
var turn = true;

let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

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

        boxes[i].disabled = true;
        checkwinner();
    })
}

const gotwinner = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkwinner = () =>{
    for(let pattern of arr){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                console.log("Winner", val1);
                cong.innerHTML = "Winner " + val1;
                gotwinner();
            }
            
        }
    }
}

btn.addEventListener("click" , () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        turn = true;
    }
    cong.innerHTML = "Tic Tac Toe";
})

    