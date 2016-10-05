function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  
}

function draw() {
  
 
}
function touchStarted ()
{
  background(255);
   rect(touches[0].X,touches[0].Y,50,50);
  textSize(50);
  
  
  
}