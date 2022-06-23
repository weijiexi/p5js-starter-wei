//declare variables
//random()

let squareSize;
let lineWidth;


function setup() {
  createCanvas(500, 400);
  
  lineWidth=random(4,35);

}

function draw() {
  background(0,99,90);
  squareSize=random(50,250);
  
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 227, 204,20);
  fill(235,129,20);
  square(250,185,squareSize);
  
}
