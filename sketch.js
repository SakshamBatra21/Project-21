var bullet,bullet2,bullet3,bullet4, wall
var speed, weight, thickness, damage
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  damage = 0.5* weight* speed* speed/thickness;
  bullet = createSprite(50,50,10,10);
  bullet2 = createSprite(50,150,10,10);
  bullet3 = createSprite(50,250,10,10);
  bullet4 = createSprite(50,350,10,10);
  wall = createSprite(1500,200,thickness,400);
  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;
}
function draw() {
  background(255,255,255); 
  bullet.collide(wall);
  bullet2.collide(wall);
  bullet3.collide(wall);
  bullet4.collide(wall);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) 
  {
   bullet.velocityX=0
   if(damage>10)
   {
     bullet.shapeColor = color(255,0,0);
   }
   if(damage<10)
   {
     bullet.shapeColor=color(0,255,0);
   } 
   
  }
  if(wall.x-bullet2.x < (bullet2.width+wall.width)/2) {
    bullet.velocityX=0
   
    if(damage>10)
   {
     bullet2.shapeColor = color(255,0,0);
   }
   if(damage<10)
   {
     bullet2.shapeColor=color(0,255,0);
   }
  }
  if(wall.x-bullet3.x < (bullet3.width+wall.width)/2) {
    bullet.velocityX=0
   
    if(damage>10)
   {
     bullet3.shapeColor = color(255,0,0);
   }
   if(damage<10)
   {
     bullet3.shapeColor=color(0,255,0);
   }
  }
    if(wall.x-bullet4.x < (bullet4.width+wall.width)/2) {
    bullet.velocityX=0
   
    if(damage>10)
   {
     bullet4.shapeColor = color(255,0,0);
   }
   if(damage<10)
   {
     bullet4.shapeColor=color(0,255,0);
   }
  }

  drawSprites();
   }