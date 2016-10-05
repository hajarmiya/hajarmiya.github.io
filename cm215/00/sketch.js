function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  stroke(0);
       strokeWeight(3);
  
}

function draw() {
  
 
}
function touchStarted()
{
  background(255);
    /**fill(random(255),random(255),random(255));*/
    
    for(var i=0;i<touches.length;i++)
    {

   rect(touches[i].x,touches[i].y,100,100);
 
    }

  
  
}