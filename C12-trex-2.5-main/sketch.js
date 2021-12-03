var trex, trex_running, edges;
var groundImage, ground;
var invisibleground;
var cloud;
var cloudImage;
var Obstacle;
var obstacle1,obstacle2,obstacle3,obctacle4,obstacle5,obstacle6;
var score;
function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png");
  cloudImage= loadImage("cloud.png");
  obstacle1= loadImage("obstacle1.png");
  obstacle2= loadImage("obstacle2.png");
  obstacle3= loadImage("obstacle3.png");
  obstacle4= loadImage("obstacle4.png");
  obstacle5= loadImage("obstacle5.png");
  obstacle6= loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);


  invisibleground= createSprite (200,190,400, 10);
invisibleground.visible=false;
score=0;

}


function draw(){
  //establecer color de fondo.
  background("black");
  fill("white")
text("Puntuación: "+score, 500,50)
score=score+(Math.round(frameCount/60));
  ground.velocityX = -2;
  if(ground.x < 0){
  
    ground.x = ground.width/2;

  }

  //cargar la posición Y del Trex
  console.log(trex.y)
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y>=100){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(invisibleground)
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnClouds(){
  if(frameCount%60==0){
  cloud= createSprite(600,100,40,10);
  cloud.addImage(cloudImage)
  cloud.y= Math.round(random(10,60))
cloud.velocityX= -3;
cloud.lifetime= 220;
cloud.scale= 0.4

cloud.depth= trex.depth;
trex.depth= trex.depth +1;
}
}
function spawnObstacles(){
  if(frameCount%60==0){
Obstacle= createSprite(600,165,10,40);
Obstacle.velocityX= -6
var rand= Math.round(random(1,6));
switch(rand){
  case 1: Obstacle.addImage(obstacle1);
  break;
  case 2: Obstacle.addImage(obstacle2);
  break;
  case 3: Obstacle.addImage(obstacle3);
  break;
  case 4: Obstacle.addImage(obstacle4);
  break;
  case 5: Obstacle.addImage(obstacle5);
  break;
  case 6: Obstacle.addImage(obstacle6);
  break;
  default:break;
}
Obstacle.scale=0.5;
Obstacle.lifetime= 220;
  }
}