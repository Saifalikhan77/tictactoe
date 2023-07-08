let boxes = document.querySelectorAll("#main div");
let turn = document.getElementById("turn");
let X_or_O = 0;
let player1 = 'Player1';
let player2 = "Player2";
function winner(b1, b2, b3) {
    b1.classList.add("win")
    b2.classList.add("win")
    b3.classList.add("win")
    if (b1.innerHTML ==`X`) {
        turn.innerHTML =`${player1} won the game`;
    }
    if(b1.innerHTML == `O`) {
        turn.innerHTML = `${player2} won the game`;
    }
}
function getWinner() {
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let box4 = document.getElementById('box4');
    let box5 = document.getElementById('box5');
    let box6 = document.getElementById('box6');
    let box7 = document.getElementById('box7');
    let box8 = document.getElementById('box8');
    let box9 = document.getElementById('box9');
    console.log("hi");
    if (box1.innerHTML !== "" && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML) {
        winner(box1, box2, box3);
        console.log("hi"); 
        return;
    }
   if (box4.innerHTML !== "" && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML) {
        winner(box4, box5, box6);
        return;
    }
    if (box7.innerHTML !== "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML) {
        winner(box7, box8, box9);
        return;
    }
    if (box1.innerHTML !== "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML) {
        winner(box1, box4, box7);
        return;
    }
    if (box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) {
        winner(box2, box5, box8);
        return;
    }
    if (box3.innerHTML !== "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) {
        winner(box3, box6, box9);
        return;
    }
    if (box1.innerHTML !== "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) {
        winner(box1, box5, box9);
        return;
    }
    if(box3.innerHTML !== "" && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML) {
        winner(box3, box5, box7);
        return;
    }
}

getWinner()
for (let i = 0; i < boxes.length; i++) {
    console.log("hi");
    boxes[i].onclick = function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O % 2 === 0) {
                console.log(X_or_O);
                this.innerHTML = `X`
                turn.innerHTML = "O turn now";
                getWinner();
                X_or_O += 1;
            }
            else {
                this.innerHTML =`O` ;
                turn.innerHTML = "X turn now";
                getWinner();
                X_or_O += 1;

            }

        }
    }
}
function submit() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('win');
        boxes[i].innerHTML = "";
        turn.innerHTML = "Start Again"

    }
}