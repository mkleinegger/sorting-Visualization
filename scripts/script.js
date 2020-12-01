const board = document.getElementById("board");
const board_ctx = board.getContext("2d");

var elem = 50;
var arr = [];

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function clearBoard() {
    board_ctx.fillStyle = 'white';
    board_ctx.strokestyle = 'black';
    board_ctx.fillRect(0, 0, board.width, board.height);
    board_ctx.strokeRect(0, 0, board.width, board.height);
}

function drawNumber(idx, number) {
    board_ctx.fillStyle = 'lightblue';
    board_ctx.strokestyle = 'darkblue';

    board_ctx.fillRect(idx, 0, (board.width / elem) - 5, number);
    board_ctx.strokeRect(idx, 0, (board.width / elem) - 5, number);
}

function genNumbers() {
    arr = [];

    for (let i = 0; i < elem; i++) {
        arr.push(Math.floor(Math.random() * 401))
    }
}

function drawNumbers() {
    clearBoard();
    genNumbers();

    for (let i = 0; i < arr.length; i++) {
        drawNumber(i * (board.width / elem), arr[i]);
    }
}

function swap(arr, a, b) {
    let tmp = arr[b];
    arr[b] = arr[a];
    arr[a] = tmp;
}

async function selectionSort() {
    for (let i = 0; i < arr.length; i++) {
        for (let ii = i + 1; ii < arr.length; ii++) {
            if (arr[ii] < arr[i]) {
                swap(arr, i, ii);
                clearBoard();
                for (let i = 0; i < arr.length; i++) {
                    drawNumber(i * (board.width / elem), arr[i]);
                }
                await Sleep(50);
            }
        }        
    }
}

async function bubbleSort() {
    for (let i = 0; i < arr.length; i++) {
        for (let ii = 0; ii < arr.length - 1 - i; ii++) {
            if (arr[ii] > arr[ii + 1]) {
                swap(arr, ii, (ii + 1));
                clearBoard();
                for (let i = 0; i < arr.length; i++) {
                    drawNumber(i * (board.width / elem), arr[i]);

                }
                await Sleep(10);
            }
        }
    }
}

function startUp() {
    drawNumbers();
}

startUp();