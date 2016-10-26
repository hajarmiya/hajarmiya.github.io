var Ax,Ay,Vy,Vx,Px,Py,Fr;

function setup() {
 createCanvas(windowWidth,windowHeight); 
 ellipse(CENTER);
 
 balleSize=50;
 Px=windowWidth/2;
 Py=windowHeight/2;
 Fr=0.01;
 Vx=0;
 Vy=0;

 
}

function draw() {
  
 background(255);
 
 
 if((Px+balleSize/2)>=windowWidth || (Px-balleSize/2)<=0)
   {Vx=-Vx;}
 
 Ax = rotationY*Fr;
 Vx +=Ax;
 Px +=Vx;
 
 if((Py+balleSize/2)>=windowHeight|| (Py-balleSize/2)<=0)
   {Vy=-Vy;}

Ay = rotationX*Fr;
Vy +=Ay;
Py +=Vy;



 drawBall();
 
  
 textSize(40);
 
 text("Rx: " + floor( rotationX), 100, 100);
 text("Ry: " + floor (rotationY), 100, 150);
 text("Rz: " + floor( rotationZ), 100, 200);
}

function drawBall ()
{
  fill(100);
  ellipse(Px,Py,balleSize,balleSize);
}