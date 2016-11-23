var Ax, Ay, Vy, Vx, Px, Py, Fr, score;
var obstacles=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   for (var i=0;i<3; i++){
   var typeObstacle = random(0,3);
   
   if (typeObstacle < 2){
      typeObstacle = "bonus";
   } else if (typeObstacle < 1){
     typeObstacle = "malus";
   } else{
     typeObstacle = "neutre";
   }
   obstacles[i] = new Obstacle(typeObstacle);
  }
  ellipse(CENTER);

  balleSize = 50;
  Px = windowWidth / 2;
  Py = windowHeight / 2;
  Fr = 0.01;
  Bc = 0.8;
  score = 0;
  Vx = 0;
  Vy = 0;
  /*x = random(0, windowWidth);
  y = random(0, windowHeight);
  x1 = random(0, windowWidth);
  y1 = random(0, windowHeight);
  x2 = random(0, windowWidth);
  y2 = random(0, windowHeight);
  rayon = 30;
*/

}

function draw() {
  


  background(255);
  
  /****joueur*****/
  fill(100);
  ellipse(100, 100, balleSize, balleSize);
  
  /********/
  for (var i=0;i<3; i++){
    
    if (dist(Px,Py, obstacles[i].xPos,obstacles[i].yPos) <= (balleSize + obstacles[i].radius)) {
      score += this.valeur;
    }
    obstacles[i].display();
  }
  
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

for (var i=0;i<3; i++){
    
    if (dist(Px,Py, obstacles[i].xPos,obstacles[i].yPos) <= (balleSize/2 + obstacles[i].radius)) {
      score += this.valeur;
    }
    obstacles[i].display();
  }
  
  textSize(15);

  text("score " + floor(score), 10, 15);
  

  
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