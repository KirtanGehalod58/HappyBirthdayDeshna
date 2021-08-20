var deshna,friendsImage;
var edge1,edge2,edge3,edge4;

function preload(){
  friendsImage = loadImage("kirtandeshna.jpeg");
}

function setup() {
  createCanvas(590,430);
  
  edge1 = createSprite(1,600,3,100000);
  edge2 = createSprite(300,1,100000,3);
  edge3 = createSprite(300,429,100000,3);
  edge4 = createSprite(589,600,3,100000);
  
  deshna = createSprite(30,30,20,20);
  deshna.shapeColor = "lightblue";
  //deshna.addImage(friendsImage);
  //mask1.scale = 0.2;
  
  line1 = createSprite(80,150,20,500);
  line1.shapeColor = "white";
  
  line2 = createSprite(140,280,20,500);
  line2.shapeColor = "white";
  
  line3 = createSprite(200,150,20,500);
  line3.shapeColor = "white";
  
  mediator = createSprite(295,215,30,30)
  mediator.shapeColor = "black";
  
  imageOfDeshnaAndMe = createSprite(400,150,30,900);
  imageOfDeshnaAndMe.shapeColor = "pink";
}


function draw(){
  background("black");
  
  text(" From Kirtan",295,420);
  
  deshna.bounceOff(edge1);
  deshna.bounceOff(edge2);
  deshna.bounceOff(edge3);
  deshna.bounceOff(edge4);
  
  deshna.bounceOff(line1);
  deshna.bounceOff(line2);
  deshna.bounceOff(line3);
  
  if(keyDown(UP_ARROW)){
    deshna.position.y = deshna.position.y -3;
  }
  
  if(keyDown(DOWN_ARROW)){
    deshna.position.y = deshna.position.y +3;
  }
  
  if(keyDown(RIGHT_ARROW)){
    deshna.position.x = deshna.position.x +3;
  }
  
  if(keyDown(LEFT_ARROW)){
    deshna.position.x = deshna.position.x -3;
  }
  
  if(deshna.isTouching(imageOfDeshnaAndMe)){
    fill("#33FFFF");
    text("Happy Birthday Deshna",100,20);
    mediator.addImage(friendsImage);
    line1.visible = false;
    line2.visible = false;
    line3.visible = false;
    imageOfDeshnaAndMe.visible = false;
    deshna.visible = false;
  }
  
  if(deshna.isTouching(line1) || deshna.isTouching(line2) || deshna.isTouching(line3)){
    deshna.position.x = 40;
    deshna.position.y = 40;
  }
  
  line1.depth = edge2.depth++
  line2.depth = edge3.depth++
  imageOfDeshnaAndMe.depth++
  
  drawSprites();

} 