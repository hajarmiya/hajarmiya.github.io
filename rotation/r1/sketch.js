var Ax,Vx,Px,Fr;

function setup() {
 createCanvas(windowWidth,windowHeight); 
 ellipse(CENTER);
 balleSize=100;
 Px=windowWidth/2;
 Py=windowHeight/2;
 fr=0.01;
 Vx=1;

 
}

function draw() {
  
 background(255);
 
Ax=rotationY*Fr;
Vx +=Ax;
Px +=Vx;
fill(100);
 ellipse(Px,rotation+Py,balleSize,balleSize);
 
  /*drawBall();*/
  
 textSize(40);
 
 text("Rx: " + floor( rotationX), 100, 100);
 text("Ry: " + floor (rotationY), 100, 150);
 text("Rz: " + floor( rotationZ), 100, 200);
}

/*function drawBall ()
{
  fill(100);
  ellipse(Px,rotation+Py,balleSize,balleSize);
}*/