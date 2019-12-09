var player_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;
var fellow;
var fellow_sprite;
var objects;
var object_sprite;
var objectX;
var objectY;
var mouse_moved;
var mouse_clicked=false;

function setup(){
  objects=new Group(mate);
  createCanvas(500,500);
 for (var i = 0; i < 10; i++){
   var mate =object_sprite=createSprite(random(10,490),random(10,490),10,10)
    objects.add(mate);
 }

  player_sprite= createSprite(100,284,10,10)



  frameRate(60);
}
function draw() {
  clear();
  background(0);
  player_sprite.overlap(objects,collect)
  var eventY;
  var eventX;
  if(mouse_moved==true){
    eventX = mouseX;
    eventY = mouseY;
    }

  if(eventX > player_sprite.position.x - 10) {
    player_sprite.velocity.x=2;
  }
  else if(eventX < player_sprite.position.x + 10) {
    player_sprite.velocity.x=-2;
  }
  else {
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
    //if close to the mouse, don't move
    player_sprite.velocity.x = 0;
  }

//if player go outside

  drawSprites();
}

function mouseMoved(){
    mouse_moved = true;
}
function collect(collector,collected){
  collected.remove();
  print("1");
}
