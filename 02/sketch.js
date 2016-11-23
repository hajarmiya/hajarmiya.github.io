var obstacles = [];
var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f, bounce;
var R;
var score;

function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  ballSize = 50;
  bSize = 30;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
  vX = 0;
  vY = 0;
  f = 0.01;
  bounce = 0.5;
  R = ballSize / 2;
  score = 0;

  for (var i = 0; i < 3; i++) {
    var typeBalle = random(0,3);
    
      if(typeBalle > 1){
        typeBalle = "bonus";
      }else if(typeBalle < 1){
        typeBalle = "malus";
      }else{
        typeBalle = "obstacle";
      }
    obstacles[i] = new Balle(typeBalle);
    
  }

}

function draw() {

  background(255);
  drawBall();
  textSize(40);
  fill(0, 0, 255),
  /*text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);*/
  text("Score:" + score, 100, 250);

   if (pX + ballSize / 2 >= windowWidth) {
    vX = -vX * bounce;
    pX = windowWidth - ballSize / 2;
  } else if (pX - ballSize / 2 <= 0) {
    vX = -vX * bounce;
    pX = ballSize / 2;
   }
   
   aX = rotationY * f;
  vX += aX;
  pX += vX;

 
  if (pY + ballSize / 2 > windowHeight) {
    vY = -vY * bounce;
    pY = windowHeight - ballSize / 2;
  } else if (pY - ballSize / 2 < 0){
    vY = -vY * bounce;
     pY =  ballSize / 2;
  }
  aY = rotationX * f;
  vY += aY;
  pY += vY;

for (var i = 0; i < 3; i++) {
  if (dist(pX, pY, obstacles[i].x,obstacles[i].y) <= (R + (obstacles[i].size)/2) ) {
    score += this.result;
  }
    obstacles[i].display();
  }
}




function drawBall() {

  fill(0);
  ellipse(pX, pY, ballSize, ballSize);

}

function Balle(genre) {
  this.type = genre;
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.size = 30;
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));
  
  if(genre=="bonus"){
    this.result = 5;
  }
  if(genre=="malus"){
    this.result = -3;
  }
  if(genre=="obstacle"){
    this.result = 1;
  }

  this.display = function() {
    fill(this.couleur);
    ellipse(this.x, this.y, this.size, this.size);
  }
}