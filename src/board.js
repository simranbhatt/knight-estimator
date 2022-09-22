//visual representation of the 8x8 board
export default function chessboard() {
    const rows = 8;
    const columns = 8;
    var board = [];
    for(var row = 0; row < rows; row++) {
        board[row] = new Array(columns);
        console.log("\n");
        for(var column = 0; column < columns; column++) {
            var columnChar = String.fromCharCode(97 + column);
            board[row][column] = row+1 + columnChar;
            process.stdout.write(board[row][column] + "  ");
        }
    }
    console.log("\n");
}