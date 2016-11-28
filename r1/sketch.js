var Ax, Ay, Vy, Vx, Px, Py, Fr, score,balleSize;
var obstacles=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   
  ellipseMode(CENTER);

  balleSize = 50;
  Px = windowWidth / 2;
  Py = windowHeight / 2;
  Fr = 0.01;
  Bc = 0.8;
  score = 0;
  Vx = 0;
  Vy = 0;
  toto=0;
  
  for (var i=0;i<3; i++){
   var toto = 0;
   
   if (toto ==0){
      type = "bonus";
   } else if (toto == 1){
     type = "malus";
   } else{
      toto==2;
     type = "neutre";
     
   }
   if (toto<2){
     toto++;
   }
   else{toto=0;}
   obstacles[i] = new Obstacle(type);
  }
 
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


  /***scoore*/
  textSize(15);
  text("score " + score, 10, 15);
  
   /********/
  for (var i=0;i<3; i++){
    
    if (dist(Px,Py, obstacles[i].xPos,obstacles[i].yPos) <= (balleSize/2 + obstacles[i].radius)) {
      score += obstacles[i].valeur;
    }
    obstacles[i].display();
  }
 
}

function Obstacle(genre){
 this.type = genre;
 this.xPos = random(0,windowWidth);
 this.yPos = random(0,windowHeight);
 this.size = random(20,50);
 this.color = color(random(0,255),random(0,255),random(0,255));
 this.radius = 25;
 
 if(genre=="bonus"){
 this.valeur = 10;
 }
 
 if(genre=="malus"){
 this.valeur = -10;
 }
 
 if(genre=="neutre"){
 this.valeur = 2;
 }
 
 this.display = function(){
   fill(this.color);
   ellipse(this.xPos,this.yPos,this.size,this.size);
 }
}