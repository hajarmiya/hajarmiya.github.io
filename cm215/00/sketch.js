document.ontouchmove = function(event){
  event.preventDefault();
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(3);
  
}

function draw() {
  background(255);
  
    /**fill(random(255),random(255),random(255));*/
    
    for(var i=0;i<touches.length;i++)
    {

   rect(touches[i].x,touches[i].y,100,100);
 
    }
 
}
function touchStarted()
{
  
  
}