function setup() {
 createCanvas(windowWidth,windowHeight); 
 ellipse(CENTER);
 balleSize=100;
 
}

function draw() {
 
  
 background(255);
 
  drawBall();
 textSize(40);
 
 text("Rx: " + floor( rotationX), 100, 100);
 text("Ry: " + floor (rotationY), 100, 150);
 text("Rz: " + floor( rotationZ), 100, 200);
}
function drawBall ()
{
  fill(100);
  ellipse(windowWidth/2,windowHeight/2,balleSize,balleSize);
}