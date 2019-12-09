var player_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;
var mouse_moved;
var mouse_clicked=false;
function setup(){
  createCanvas(500,500);
  player_sprite= createSprite(100,284,10,10)
<<<<<<< Updated upstream
=======
    player_sprite.shapeColor = color(255);
    player_sprite.rotateToDirection = true;
    player_sprite.maxSpeed = 2;
    player_sprite.friction = 0.03;


>>>>>>> Stashed changes
  frameRate(60);
}
function draw() {
  clear();
  background(0);

  var eventY;
  var eventX;
  if(mouse_moved==true){
    eventX = mouseX;
    eventY = mouseY;
    }

<<<<<<< Updated upstream
  if(eventX > player_sprite.position.x - 10) {
    player_sprite.velocity.x=2;
  }
  else if(eventX < player_sprite.position.x + 10) {
    player_sprite.velocity.x=-2;
  }
  else {
    player_sprite.changeAnimation('stand');
    //if close to the mouse, don't move
    player_sprite.velocity.x = 0;
  }
  if(eventY < player_sprite.position.y + 10) {
    player_sprite.velocity.y=-2;
  }
  else if(eventY > player_sprite.position.y + 10) {
    player_sprite.velocity.y=+2;
  }
  else {
    player_sprite.changeAnimation('stand');
    //if close to the mouse, don't move
    player_sprite.velocity.x = 0;
  }
=======
    if (mouseIsPressed) {
      player_sprite.attractionPoint(1, mouseX, mouseY);
    }
    print(player_sprite.velocity.x);

>>>>>>> Stashed changes

//if player go outside

  drawSprites();
}

function mouseMoved(){
    mouse_moved = true;
}
