function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  
 
}
function touchStarted ()
{
  background(255);
  textSize(50);
  rect(touches[x],touches[y],50,50);
  text(touches[0].x);
  text(touches[0].y);
  
  
}