var Ax,Ay,Vy,Vx,Px,Py,Fr,x1,y1,x,y,x2,y2,rayon;

function setup() {
 createCanvas(windowWidth,windowHeight); 
 ellipse(CENTER);
 
 balleSize=50;
 Px=windowWidth/2;
 Py=windowHeight/2;
 Fr=0.01;
 Bc=0.8;
 
 Vx=0;
 Vy=0;
 x=random(0,windowWidth);
 y=random(0,windowHeight);
 x1=random(0,windowWidth);
 y1=random(0,windowHeight);
 x2=random(0,windowWidth);
 y2=random(0,windowHeight);
 rayon=30;

 
}

function draw() {

  
 background(255);
 
 fill(255,58,124);
   ellipse(x,y,rayon,rayon);
 
 fill(36,56,94);
   ellipse(x1,y1,rayon,rayon);
   
  fill(170,1,124);
   ellipse(x2,y2,rayon,rayon);
   
  if(dist(x,y,Px,Py)<=(balleSize/2+rayon/2))
   {x=random(0,windowWidth);
  y=random(0,windowHeight);
    balleSize=balleSize*0.5; 
    
     /*if(dist(x1,y1,Px,Py)<=(balleSize/2+rayon/2))
   {Vx=-Vx;
     Vy=-Vy;*/
   }
 
   
 if((Px+balleSize/2)>=windowWidth || (Px-balleSize/2)<=0)
   {Vx=-Vx*Bc;}
   
 Ax = rotationY*Fr;
 Vx +=Ax;
 Px +=Vx;
 
 if((Py+balleSize/2)>=windowHeight|| (Py-balleSize/2)<=0)
   {Vy=-Vy*Bc;}

Ay = rotationX*Fr;
Vy +=Ay;
Py +=Vy;

drawBall();

 
 /*textSize(40);
 
 text("Rx: " + floor( rotationX), 100, 100);
 text("Ry: " + floor (rotationY), 100, 150);
 text("Rz: " + floor( rotationZ), 100, 200);*/
}

function drawBall ()
{
  fill(100);
  ellipse(Px,Py,balleSize,balleSize);
  
}




