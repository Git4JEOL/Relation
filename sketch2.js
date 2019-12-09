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

    player_sprite.shapeColor = color(255);
    player_sprite.rotateToDirection = true;
    player_sprite.maxSpeed = 2;
    player_sprite.friction = 0.03;

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

    if (mouseIsPressed) {
      player_sprite.attractionPoint(1, mouseX, mouseY);
    }
    print(player_sprite.velocity.x);


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
