// class Shape {
//     constructor(canvas) {
//         this.canvas = canvas
//         this.canvas = random(canvas.width)
//         this.canvas = random(canvas.heigth)    
//     }
//     x = 100
//     y = 100
//     w = 50
//     h = 50

//     vx = random(-5, 5)
//     vy = random(-5, 5)

//     c = random(255)

//     move() {
//         this.x += this.vx;
//         this.y += this.vy;

//     if(this.x < 0 || this.x > this.canvas.width) {
// this.vx = -this.vx;}
 
//     if(this.x < 0 || this.x > this.canvas.height) {
//         this.vx = -this.vx;}
//     }


//     draw() {
//         this.move();
//         fill(this.c)
//     }
// }
// class Square extends Shape {
//     draw() {
//         this.x += this.vx;
//         this.y += this.vy;
//         square(this.x, this.y, this.w);
//     }
// }

// // let s = new Square();
// // s.x = 50
// // s.draw();

// class Circle extends Shape {
//     draw() {
//         this.x -= 2;
//         circle(this.x, this.y, this.w);
//     }
// }

// // let s = new Circle();
// // s.x = 200
// // s.draw();

// let shapes = [];

// let canvas = {width: 600, height: 800};

// var setup = function () {
//     createCanvas(canvas.width, canvas.height);
//     for (let index = 0; index < 200; index++) {
//         let box = new Square(canvas);
//         shapes.push(box);

//         let cir = new Circle(canvas);
//         shapes.push(cir);        
//     }
// };

// var draw = function () {
//     background(200);
//     for (let index = 0; index < shapes.length; index++) {
//         let shape = shapes[index];
//         shape.draw();
//     }
// };

// // let rectangle =  new Rectangle();
// // rectangle.x = 200;
// // rectangle.draw();
// // let r = new Reactangle();










class Shape {

    constructor(canvas) {
        this.canvas = canvas
        this.x = random(canvas.width)
        this.y = random(canvas.height)
    }


    x = 100;
    y = 100;
    w = 50;
    h = 50;

    //c = random(255)

    vx = random(-2, 2)
    vy = random(-2, 2)



    move(){
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > this.canvas.width) {
            this.vx = -this.vx
        }
        if (this.y < 0 || this.y > this.canvas.height) {
            this.vy = -this.vy
        }
    }

    draw() {
        this.move()
        //fill(this.c)
        throw "nothing to draw lol"
    }
}


class Square extends Shape {
    draw() {
        this.move()
        square(this.x, this.y, this.w)
    }
}

class Circle extends Shape {
    //c = [random(255), random(255), random(255)]
    draw() {
        this.move()
        circle(this.x, this.y, this.w)
    }
}
let shapes = []
let canvas = {width: 600, height:400}

var setup = function() {
    createCanvas(canvas.width, canvas.width)
    for(i = 0; i < 50; i++){
        let box = new Square(canvas)
        shapes.push(box)

        let cir = new Circle(canvas)
        shapes.push(cir)

    }
}

var draw = function () {
    background(200)
    
    stroke(0);          
fill(150);          
rect(50,50,75,100);

    stroke(0);
    line(0, 0, 100, 100);
    stroke(255);
    noFill();
    rect(25, 25, 50, 50);
  
    fill(random(255), random(255), random(255));
    ellipse(20,20,16,16);
  
    fill(random(255), random(255), random(255));
    ellipse(40,20,16,16);
  
    fill(random(255), random(255), random(255));
    ellipse(60,20,16,16);


ellipse(202, 208, 300, 300);

ellipse(157, 151, 40, 40);

ellipse(304, 142, 40, 40);

ellipse(257, 240, 120, 136);

    fill(0,0,255);
  rect(0,0,50,100);

  fill(255,0,0,255);
  rect(0,0,100,20);

  fill(255,0,0,191);
  rect(0,25,100,20);

  fill(255,0,0,127);
  rect(0,50,100,20);

  fill(255,0,0,63);
  rect(0,75,100,20);

    for(let i = 0; i < shapes.length; i++){
        let shape = shapes[i]
        shape.draw()
    }
}