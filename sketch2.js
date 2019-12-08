var player_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;

function setup(){
  createCanvas(500,500);
  player_sprite= createSprite(100,284,10,10)

}
function draw() {
  clear();
  background(0);
  player_sprite.velocity.x=2;
  drawSprites();

}
