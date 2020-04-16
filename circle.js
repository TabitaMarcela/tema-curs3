class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
        this.dd = 1;
        this.step = 5;
        canvas = document.getElementById("canvas3");
        context = canvas.getContext("2d");
    }

    drawCircle() {
        context.beginPath();
        context.arc(this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI

        );
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    move(stepX) {
        context.clearRect(0, 0, canvas.width, canvas.height);          
        this.radius += this.step * this.dd;
        this.x += stepX * this.dx;
        this.changeDirectionIfExceededBounds();  
        this.drawCircle();
    }
    changeDirectionIfExceededBounds() {     
        if (this.x + this.radius > canvas.width - this.radius - this.step) {
            this.dx = -1;
            this.dd = -1;
            this.color = "blue";
        }
        if (this.x - this.radius < 0 + this.radius + this.step) {
            this.dx = 1;   
            this.dd = 1;         
            this.color = "red";
        }
    }
}
