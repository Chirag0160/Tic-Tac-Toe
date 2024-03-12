console.log("welcome to tictactoe")
let bgmusic = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X";
let isgameOver = false;

// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2, -1.5, 5, 0, -1.5, 8, 0],
        [3, 4, 5, -1.5, 15, 0, -1.5, 30, 0],
        [6, 7, 8, -1.5, 25, 0, -1.5, 50, 0],
        [0, 4, 8, -2.5, 15, 45, -0.5, 30, 45],
        [2, 4, 6, -3, 15, 135, 0, 28, 135],
        [0, 3, 6, -12.5, 15, 90, -21.50, 31, 90],
        [1, 4, 7, -2.5, 15, 90, -1.5, 31, 90],
        [2, 5, 8, 7.5, 15, 90, 18.5, 31, 90],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isgameOver = true
            gameOver.play()
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "165px";
            document.querySelector('.line').style.width = "35vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            if (window.matchMedia("(max-width: 950px)")) {
                document.querySelector('.line').style.width = "63vw";
                document.querySelector('.line').style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`
            }

        }
    })
}

// Game Logic
// bgmusic.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName("info")[0].innerText = turn + "' Turn"
            }
        }
    })
})

// onClick lister to Reset button to reset game
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    isgameOver = false
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = turn + "' Turn"
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})