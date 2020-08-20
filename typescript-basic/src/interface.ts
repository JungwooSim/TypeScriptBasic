interface TV {
    turnOn() : boolean;
    turnOff() : void;
}

const myTv: TV = {
    turnOn() {
        return true;
    },
    turnOff() {
    }
}

interface Cell {
    row: number;
    col: number;
    piece?: Piece; // ? <- Optional
}

interface Piece {
    move(from: Cell, to: Cell) : boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row ++) {
        for (let col = 0; col < 3; col++) {
            cells.push({row, col});
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    }
}

// Example
interface SingUp {
    email: string;
    id: string;
    password: string;
}

// ajaxSignup가 호출될때 필요한 매게변수를 인터페이스로 작성하면 안정성있게 코드를 짤수 있다.
function ajaxSignup(data: SingUp) {}

ajaxSignup({email: "email", id: "id", password: "password"});
