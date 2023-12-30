let min;
var heightMax = 400;

//this gets called only once in the very beginning
function setup() {
    createCanvas(800, 600);
}

//this gets called every frame (about 60 frames per second)
function draw() {
    let hr = hour();
    let sec = second();

    if (min != minute()) {
        min = minute();
        console.log(min);
    }

    background(246, 255, 248);
    fill(255, 0, 0);
    stroke(255);

    var h = map(hr, 0, 24, 500, 100);
    var m = map(min, 0, 60, 500, 100);
    var s = map(sec, 0, 60, 500, 100);

    fill(234, 244, 244);
    triangle(100, 500, 300, 500, 200, 100);
    triangle(300, 500, 500, 500, 400, 100);
    triangle(500, 500, 700, 500, 600, 100);

    fill(107, 144, 128);
    triangle(100, 500, 300, 500, 200, h);
    fill(164, 195, 178);
    triangle(300, 500, 500, 500, 400, m);
    fill(204, 227, 222);
    triangle(500, 500, 700, 500, 600, s);
}