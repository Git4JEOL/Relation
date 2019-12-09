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
var timer;

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
    //player control setting;

  frameRate(60);
}
function draw() {
  clear();
  background(0);
  player_sprite.overlap(objects,collect)

    if (mouseIsPressed) {
      player_sprite.attractionPoint(1, mouseX, mouseY);
    }
    print(objects.length);

    if(player_sprite.position.x>500 || player_sprite.position.x<0){
      player_sprite.velocity.x*=-1;
    }
    if(player_sprite.position.y>500 || player_sprite.position.y<0){
      player_sprite.velocity.y*=-1;
    }
    //if player go outside
    if(objects.length<10){
      var mate =object_sprite=createSprite(random(10,490),random(10,490),10,10)
      object_sprite.attractionPoint(1, random(10,490), random(10,490));
      object_sprite.friction = 0.02;
       objects.add(mate);

    }
    //if player eat object, make new object

  drawSprites();
}

function mouseMoved(){
    mouse_moved = true;
}
function collect(collector,collected){
  collected.remove();
  print("1");
}
