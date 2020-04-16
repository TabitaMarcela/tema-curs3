class Grid {
    constructor() {
        this.rows = 8;
        this.columns = 8;
        this.width = 30;
        this.height = 30;
        this.grid = [];
    }
    createGrid() {
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.grid[row][column] = new Cell(row, column, (row % 2 == column % 2) ? "NavajoWhite" : "black");
            }
        }
    }
    drawGrid() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.grid[row][column].drawCell();
            }
        }
    }
}



