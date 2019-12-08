var player_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;
var mouse_moved;
var mouse_clicked=false;
function setup(){
  createCanvas(500,500);
  player_sprite= createSprite(100,284,10,10)
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

  if(eventX > player_sprite.position.x - 10) {
    player_sprite.velocity.x=2;
  }
  if(eventX < player_sprite.position.x + 10) {
    player_sprite.velocity.x=-2;
  }
  if(eventY < player_sprite.position.y + 10) {
    player_sprite.velocity.y=-2;
  }
  if(eventY > player_sprite.position.y + 10) {
    player_sprite.velocity.y=+2;
  }

//if player go outside

  drawSprites();
}

function mouseMoved(){
    mouse_moved = true;
}
