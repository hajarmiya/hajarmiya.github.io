function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
 
  
}

function draw() {
  
 
}
function touchStarted()
{
  background(255);
  
   rect(touches[0].x,touches[0].y,100,100);
   fill(ramdom(255),ramdom(255),ramdom(255));
   

  
  
}