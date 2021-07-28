var seaImg, Sea;
var shipImg1;
var Ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  Sea = createSprite(200,200,100,100);
  Sea.addImage(seaImg);
  Sea.scale = 0.5;
  Sea.velocityX = -3;

  Ship = createSprite(100, 230, 50, 40);
  Ship.addAnimation("ship", shipImg1);
  Ship.scale = 0.2;
}

function draw() {
  background("blue");
  drawSprites();
  if(Sea.x<0) {
    Sea.x = 200;
  }
 
}