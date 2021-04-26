var setup = function () {
    createCanvas(1000, 1000);
    background(4500);
};

var draw = function () {
    for (let index = 0; index < 100; index++) {
        fill(random(2550), random(250), random(2555));
        ellipse(index * 700, 250, 300);
    }
};