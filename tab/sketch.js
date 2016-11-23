var obstacles=[];
var Ax, Ay, Vy, Vx, Px, Py, Fr,score;

function setup() {
createCanvas(windowWidth,windowHeight);
ellipse(CENTER);

  balleSize = 50;
  Px = windowWidth / 2;
  Py = windowHeight / 2;
  Fr = 0.01;
  Bc = 0.8;
  score = 0;
  Vx = 0;
  Vy = 0;

  /*for(var i=0;  i<3 ;i++)
  {
  obstacles[i]= new Obstacle("bonnus");
  }*/
}

function draw() {
  
   background(255);
  
  /****joueur*****/
  fill(100);
  ellipse(Px, Py, balleSize, balleSize);
  
  /********************* limite de bille************************/
/**X**/
  if ((Px + balleSize / 2) >= windowWidth) {
    Vx = -Vx * Bc;
   Px=windowWidth-balleSize / 2;
  }
  
    else if ( (Px - balleSize / 2) <= 0) {
    Vx = -Vx * Bc;
     Px=balleSize / 2;
  }

  Ax = floor(rotationY) * Fr;
  Vx += Ax;
  Px += Vx;
  
/**Y**/
  if ((Py + balleSize / 2) >= windowHeight ) {
    Vy = -Vy * Bc;
    Py=windowHeight-balleSize / 2;
  }
  else if ( (Py - balleSize / 2) <= 0) {
    Vy = -Vy * Bc;
    Py=balleSize / 2;
  }

  Ay = floor(rotationX) * Fr;
  Vy += Ay;
  Py += Vy;

 
  /*********/
   for(var i=0;  i<210 ;i++)
  {
  obstacles[i].display();
  }
 textSize(15);

  text("score " + floor(score), 10, 15);
}

function Obstacle(genre){
  this.type = genre;
  this.posX= random(0,windowWidth);
  this.posY= random(0,windowHeight);
  this.size= random(20,50);
  this.couleur = color(random(0,255),random(0,255),random(0,255));
  
  this.display= function(){
    
    fill(this.couleur);
    ellipse(this.posX,this.posY,this.size,this.size);
  }
}