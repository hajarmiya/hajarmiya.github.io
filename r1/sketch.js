var Ax, Ay, Vy, Vx, Px, Py, Fr, x1, y1, x, y, x2, y2, rayon, score;
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
    
    if (dist(pX,pY, obstacles[i].xPos,obstacles[i].yPos) <= (R + obstacles[i].radius)) {
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

 
  /*********/

  /*fill(255, 58, 124);
  ellipse(x, y, rayon, rayon);

  fill(36, 56, 94);
  ellipse(x1, y1, rayon, rayon);

  fill(170, 1, 124);
  ellipse(x2, y2, rayon, rayon);*/

  /*******condition obstacle*******/
  

  /*if (dist(x, y, Px, Py) <= (balleSize / 2 + rayon / 2)) {
   /* x = random(0, windowWidth);
    y = random(0, windowHeight);
    score = score + 10;
  } 
  else if (dist(x2, y2, Px, Py) <= (balleSize / 2 + rayon / 2)) {
    Vx = -Vx;
    Vy = -Vy;
  } 
  else if (dist(x1, y1, Px, Py) <= (balleSize / 2 + rayon / 2)) {
    x1 = random(0, windowWidth);
    y2 = random(0, windowHeight);
    score = score -10;
  }
  else {
    Vx = Vx;
    Vy = Vy;
  }*/
  

  textSize(15);

  text("score " + floor(score), 10, 15);

  /*textSize(40);
 
  text("Rx: " + floor( rotationX), 100, 100);
  text("Ry: " + floor (rotationY), 100, 150);
  text("Rz: " + floor( rotationZ), 100, 200);*/
}
function Obstacle(kind){
 this.type = kind;
 this.xPos = random(0,windowWidth);
 this.yPos = random(0,windowHeight);
 this.size = random(20,50);
 this.color = color(random(0,255),random(0,255),random(0,255));
 this.radius = 25;
 
 if(kind=="bonus"){
 this.valeur = 10;
 }
 
 if(kind=="malus"){
 this.valeur = -10;
 }
 
 if(kind=="neutre"){
 this.valeur = 2;
 }
 
 this.display = function(){
   fill(this.color);
   ellipse(this.xPos,this.yPos,this.size,this.size);
 }
}