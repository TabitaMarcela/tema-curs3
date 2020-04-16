// ex1
canvas = document.getElementById("canvas1");
context = canvas.getContext("2d");
context.beginPath();
context.moveTo(50, 50);
context.lineTo(100, 100);
context.lineTo(50, 100);
context.closePath();
context.fillStyle = "green";
context.fill();

// ex2
const dreptunghi = new Dreptunghi("purple", [60, 30]);
dreptunghi.drawDreptunghi();

// ex3
const circle = new Circle(20, 150, 20, "red");
circle.drawCircle();

function animateCircle() {
    circle.move(circle.radius);
}
// setInterval(animateCircle, 500)

// ex4 
//grid[row][column] = new Cell(row, column, (row%2 == column%2) ? "NavajoWhite" : "black"); 


//ex5
const table = new Grid();
table.createGrid();
table.drawGrid();
const square = new Square(2,1); 
square.draw();
const square2 = new Square(5,7);
square2.draw();