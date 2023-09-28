console.log("JS is linked")

let player = 'X';

function play(evt) {
    const targetSquare = evt.target;
    targetSquare.innerText = player;
    if (player === 'X'){
        player = 'O';
    } else {
        player= 'X';
    }

const playerSpan = document.querySelector('#current-player');
playerSpan.innerText = player;

}

const squares = document.querySelectorAll('.square')


for (const square of squares) {
    square.addEventListener('click', play)
}
