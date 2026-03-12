window.addEventListener("load", () => {
    generateBoard();
});

window.addEventListener("resize", () => {
    generateBoard();
});

function generateBoard() {
    const board = document.querySelector('.board');

    board.innerHTML = ""; //make it default beaucse resize give issue every time of resize

    // while (board.firstChild) {
    // board.removeChild(board.firstChild);both working same
// }

    const blockWidth =50;
    const blockHeight =50;

    const cols = Math.floor(board.clientWidth / blockWidth);
    const rows = Math.floor(board.clientHeight / blockHeight);
    const blocks=[];
    const snake =[{},{},{}]
    console.log("Cols:", cols, "Rows:", rows);

    // for (let i = 0; i < rows * cols; i++) {
    //     const block = document.createElement('div');
    //     block.classList.add('block');
    //     board.appendChild(block);    
    // }

     for (let i = 0; i < rows ; i++) {
        for(let j=0;j<cols;j++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        blocks[`${i}-${j}`] =block;

    }
}

}

