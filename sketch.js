
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

var survivalTime

var PLAY = 1;
var END = 0;
var gameState = PLAY

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
}



function setup(){
  
  createCanvas(600,600)
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,2000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
}


function draw() {
background(220);
    if(ground.x < 0){
    
    ground.x = ground.width/2;
    
  }
  
  stroke("green");
   textSize(20);
   fill("white")
  
  
  stroke("green");
   textSize(20);
   fill("white")
  
  text("Survival Time:"+survivalTime,100,50 )
  
   text("Score: " +score,400,500)
  if(gameState === PLAY){

  
     if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -15 ;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  console.log(monkey.y);
  
  if(bananaGroup.isTouching(monkey)){
    score = score +1;
  }
  
   
  
   
   survivalTime = Math.ceil(frameCount/frameRate())
   
    if(obstacleGroup.isTouching(monkey)){
      
      gameState = END;
      
    }
  }
  if(gameState === END){
    
    
    banana.velocityX =0;
    banana.visible = false;
    obstacle.velocityX =0;
    obstacle.visible = false;
  }
   monkey.collide(ground);
   obstacleSpwan();
   bananaSpwan();
   drawSprites();
}

function bananaSpwan(){
  
   if (frameCount % 100 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(170,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
     
    bananaGroup.add(banana)
   }
  
}

function obstacleSpwan(){
   if (frameCount % 300 === 0) {
    obstacle = createSprite(600,323,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.12;
    obstacle.velocityX = -6;
     
    obstacleGroup.add(obstacle)
   }
  
  
}




