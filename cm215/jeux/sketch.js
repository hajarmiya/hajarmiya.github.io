var obstacles = [];
var Size;
var vX, vY;
var pX, pY;
var aX, aY;
var f, bounce;
var Rayon;
var score;
var typeObstacle;
var col;
/*********************************************************=============*******************************************************/
function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  var typeObstacle = 0;
  for (var i = 0; i < 3; i++) {
    obstacles[0] = new Balle("bonus");
    obstacles[1] = new Balle("malus");
    obstacles[2] = new Balle("neutre");
  }

  vX = 0;
  vY = 0;
  f = 0.01;
  bounce = 0.5;
  Rayon = Size / 2;
  score = 0;
  Size = 50;
  bSize = 30;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
}
/*********************************************************=============*******************************************************/
function draw() {

  background(255);
  drawBall();
  textSize(20);
  fill(0, 0, 255);
  for (i = 0; i < 3; i++) {
  obstacles[i].lesbilles();
  }

  aX = rotationY * f;
  vX += aX;
  pX += vX;
  aY = rotationX * f;
  vY += aY;
  pY += vY;
  
  text("score:" + score, 50, 50);
  
if ((pX + Size / 2) >= windowWidth) {
    vX = -vX * bounce;
    pX = windowWidth - Size / 2;
  
  
} else if ((pX - Size / 2 <= 0)) {
    vX = -vX * bounce;
    pX = Size / 2;
  
  
}if ((pY + Size / 2 )>= windowHeight) {
    vY = -vY * bounce;
    pY = windowHeight - Size / 2;
  
    
  } else if (pY - Size / 2 <= 0) {
    vY = -vY * bounce;
    pY = Size / 2;
  }


  for (i = 0; i < 3; i++) {
    if (dist(pX, pY, obstacles[i].pX, obstacles[i].pY) <= Size / 2 + obstacles[i].size / 2) {

      if (obstacles[i].type === "neutre") {
        vX = -vX * bounce;
        vY = -vY * bounce;

      } else if (obstacles[i].type === "bonus") {
        if (obstacles[i].col === false) {
            obstacles[i].col = true;
            score += 10;
        }
      } else if (obstacles[i].type === "malus") {
             if (obstacles[i].col === false) {
                obstacles[i].col = true;
                score -= 5;
        }
      }
    } else {
      obstacles[i].col = false;
    }
  }
}
/*********************************************************=============*******************************************************/
function drawBall() {

  fill(0);
  ellipse(pX, pY, Size, Size);

}
/*********************************************************=============*******************************************************/
function Balle(genre) {
  this.type = genre;
  this.pX = random(0, windowWidth);
  this.pY = random(0, windowHeight);
  this.size = 30;
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));
  if (this.type == "neutre") {
    this.color = color(0);
  }

  this.col = false;

  this.lesbilles = function() {
    fill(this.couleur);
    ellipse(this.pX, this.pY, this.size, this.size);
  }
}