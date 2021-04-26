let canvas = { width: 1400, heigth: 800 };

let boxes = (
    { x: 100, y: 100, w: 150, h: 200, s: 5 },
    { x: 100, y: 100, w: 150, h: 200, s: 5 },
    { x: 100, y: 100, w: 150, h: 200, s: 5 }
);

var setup = function () {
    createCanvas(canvas.width, canvas.height);
};

var draw = function () {
    background(100);

    text("Secret message", canvas.width / 2, canvas.height / 2);

    for (let index = 0; index < boxes.length; index++) {
        const box = boxes[index];

    box.x = random(max(box.x - box.s, 0), min(box.x + box.s + box.w, canvas.width))
    box.y = random(max(box.y - box.s, 0), min(box.y + box.s + box.h, canvas.height));

    rect(box.x, box.y, box.w, box.h);
    }
};