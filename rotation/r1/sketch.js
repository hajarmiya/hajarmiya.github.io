var Ax,Vx,Px,Angle,Fr;
function setup() {
 createCanvas(windowWidth,windowHeight); 
 ellipse(CENTER);
 balleSize=50;
 posX=windowWidth/2;
 posY=windowHeight/2;
 
 Ax=Angle+Fr;
Vx=Vx+Ax;
Px=Px+Vx;
 
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
  
  ellipse(posX,rotationX+posY,balleSize,balleSize);
}