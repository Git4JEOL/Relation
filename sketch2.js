var player_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;
var fellow;
var fellowNum=0;
var fellow_sprite;
var fellows;
var f=0;
var objects;
var object_sprite;
var objectX;
var objectY;
var stage=1;
var mouse_moved;
var mouse_clicked=false;
var timer;
var goals;
var goal;
var goalNum=0;
let canvas;
let canvasWidth = 400;
let canvasHeight = 400;
var player_pos_reset=0;

function setup(){
   canvas = createCanvas(canvasWidth, canvasHeight);
   canvas.position(windowWidth/2 - canvasWidth, 0);
  objects=new Group(mate);
  fellows=new Group(fellow);
 for (var i = 0; i < 10; i++){
   var mate =object_sprite=createSprite(random(10,400),random(10,400),10,10)
    objects.add(mate);
    timer=10  ;
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
  function one(){
  background(0);
  fill(255);
  textSize(20);
  text("안녕하세요.반가워요.",120,300);
  player_sprite.overlap(objects,collect);

/*  if(objects.length<10){
    mate =object_sprite=createSprite(random(10,400),random(10,400),10,10);
    object_sprite.attractionPoint(1, random(10,400), random(10,400));
    object_sprite.friction = 0.02;
    objects.add(mate);
  }*/
  //if player eat object, make new
    time();
  }//stage one

  function two(){
    frameCount==0;
    print(fellowNum);
    background(10);
    for (var i = objects.length; i--; objects[i].remove());
    fill(125);
    textSize(20);
    text("다들 어디로 가는거야.",120,300);
    if(frameCount==60&&fellowNum!=0){
      fellowNum--;
      frameCount=0;
    }
    time();
    if(goalNum<fellowNum){
    var mate =object_sprite=createSprite(random(10,400),random(10,400),10,10)
    objects.add(mate);
  }

  player_sprite.overlap(objects,collect);
  }//stage two

  function three(){
    print(fellowNum);
    background(30);
    fill(210);
    textSize(20);
    text("안녕하세요",150,300);
    if(objects.length<20){
      mate=object_sprite=createSprite(random(10,490),random(10,490),10,10);
      object_sprite.attractionPoint(1, random(10,490), random(10,490));
      object_sprite.friction = 0.02;
    }
    objects.add(mate);
    player_sprite.overlap(objects,collect);
    time()
    fill(125);

  }//stage three
  function four(){
  if(player_pos_reset<1){
    player_sprite.position.x=200;
    player_sprite.position.y=10;
    player_pos_reset++;
  }
    background(20);
    fill(200);
    rect(100,0,200,400);
    for (var i = objects.length; i--; objects[i].remove());
  }
  if (stage == 1) {
    one();
   } else if (stage == 2) {
     two(); }
     else if (stage == 3) {
       three(); }
       else if (stage == 4) {
         four(); }
  if(stage==1 && timer==0){
    stage=2;
    timer=5;
  }
  if(stage==2 && timer==0){
    stage=3;
    timer=10;
  }
  if(stage==3 && timer==0){
    stage=4;
    timer=10;
  }
  control()
  drawSprites();
}

function control(){
  if (mouseIsPressed) {
    player_sprite.attractionPoint(1, mouseX, mouseY);
  }
  print(objects.length);

  if(player_sprite.position.x>canvasWidth || player_sprite.position.x<0){
    player_sprite.velocity.x*=-1;
  }
  if(player_sprite.position.y>canvasHeight || player_sprite.position.y<0){
    player_sprite.velocity.y*=-1;
  }
  //if player go outside
}

function time(){ //timer system
  fill(255);
  textSize(10);
  text(fellowNum,200,350);
  text(timer,200,390);
  if(frameCount==60 && timer>0){
    timer--;
    frameCount=0;
  }
}
function collect(collector,collected){
  collected.remove();
  fellowNum++;
  print("1");
}
