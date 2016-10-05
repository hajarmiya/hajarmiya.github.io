function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
 
  
}

function draw() {
  
 
}
function touchStarted()
{
  background(255);
    /**fill(random(255),random(255),random(255));*/
    
    for(var i=0;i<touches.length;i++)
    {
      stroke(3);
   rect(touches[i].x,touches[i].y,100,100);
 
    }

  
  
}