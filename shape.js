class Shape {
    constructor(culoare, laturi) {
        this.culoare = culoare;
        this.laturi = laturi;
        canvas = document.getElementById("canvas2");
        context = canvas.getContext("2d");
    }
    calculeazaPerimetru() {
        let perimetru = 0;
        for (let latura of this.laturi) {
            perimetru += latura;
        }
        return perimetru;
    }

    semiperimetru() {
        return this.calculeazaPerimetru() / 2;
    }

    shapeType() {
        let type;
        switch (this.laturi.length) {
            case (3):
                type = "triunghi";
                break;
            case (4):
                type = "patrulater";
                break;
            case (5):
                type = "pentagon";
                break;
            case (6):
                type = "hexagon";
                break;
            default: type = "work in progress";
        }
        return type;
    }
}

class Dreptunghi extends Shape {
    constructor(culoare, laturi) {
        laturi = [laturi[0], laturi[1], laturi[0], laturi[1]];
        super(culoare, laturi);
        this.laturi = laturi;
    }

    arie() {
        return this.laturi[0] * this.laturi[1];
    }
    drawDreptunghi() {
        context.beginPath();
        context.rect(10, 10, 10 + this.laturi[0], 10 + this.laturi[1]);
        context.fillStyle = this.culoare;
        context.fill();
        context.closePath();
    }
}

class TriughiEchilateral extends Shape {
    constructor(culoare, laturi) {
        laturi = [laturi, laturi, laturi];
        super(culoare, laturi);
        this.laturi = laturi;
    }

    arie() {
        return this.laturi[0] ** 2 * Math.sqrt(3) / 4;
    }
}

class Square{
    constructor(row, column){
        this.row = row;
        this.column = column;
        this.color = "green";
        table.grid[this.row][this.column] = new Cell(this.row, this.column, this.color);
    }

    draw(){        
        table.drawGrid();
    }
}
