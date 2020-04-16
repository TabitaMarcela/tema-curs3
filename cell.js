class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;        
        canvas = document.getElementById("canvasTetris");
        context = canvas.getContext("2d");
    }

    drawCell() {
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.y * 30, this.x * 30, 30, 30);
        context.fill();
        context.stroke();
        context.closePath();
    }
}