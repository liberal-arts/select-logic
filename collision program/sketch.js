function setup() {
    createCanvas(640, 480);
}

let x=200;
let y=200;

let speed =10;

let speedX=speed;
let speedY=speed;

function draw() {
    
    
    x+=speedX;
    y+=speedY;
    
    if(width-40<x || x<40){
        speedX = -speedX;
        background(100);
    }
    
    if(height-40<y || y<40){
        speedY = -speedY;
        background(100);
    }
    
    ellipse(x, y, 80, 80);
    ellipse(mouseX,mouseY,30,30,);
}