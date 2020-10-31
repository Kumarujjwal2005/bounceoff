var gameObject6, movingRect;
var gameObject1, gameObject2, gameObject3,gameObject4,gameObject5;

function setup() {
  createCanvas(1200,800);
  
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,200,50,50);
  gameObject1.shapeColor = "maroon";
  gameObject2 = createSprite(200,250,50,50);
  gameObject2 .shapeColor="blue";
  gameObject3 = createSprite(300,300,50,50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(400,350,50,50);
  gameObject4.shapeColor = "pink";
  gameObject5 = createSprite(50,450,50,50);
  gameObject5.shapeColor = "white";
  gameObject5.velocityX = 5;
  gameObject6 = createSprite(700, 450, 50, 50);
  gameObject6.shapeColor = "white";
  //gameObject6.debug = true;
  gameObject6.velocityX = -5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameObject1.shapeColor = "maroon";
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameObject2.shapeColor = "blue";
  }
  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameObject3.shapeColor = "yellow";
  }
  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameObject4.shapeColor = "pink";
  }


  bounceOff(gameObject5,gameObject6);

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
  
      return true;
}
else {
  return false;
  
}

}  

function bounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object1.width/2 + object2.width/2 &&
      object2.y - object1.y < object1.width/2 + object2.width/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
      }
}