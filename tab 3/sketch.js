var obstacles=[];
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i=0;  i<3 ;i++)
  {
  obstacles[i]= new Obstacle("bonnus");
  }
}

function draw() {
  
   for(var i=0;  i<210 ;i++)
  {
  obstacles[i].display();
  }
 
}

function Obstacle(genre){
  this.type = genre;
  this.posX= random(0,windowWidth);
  this.posY= random(0,windowHeight);
  this.size= random(20,50);
  this.couleur = color(random(0,255),random(0,255),random(0,255));
  
  this.display= function(){
    
    fill(this.couleur);
    ellipse(this.posX,this.posY,this.size,this.size);
  }
}