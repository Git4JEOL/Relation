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
var col1;
var spr1;
var spr1N=1;
var obs;//obstacles

function setup(){
   canvas = createCanvas(canvasWidth, canvasHeight);
   canvas.position(windowWidth/2-canvasWidth/2, 20);
   objects=new Group();
   fellows=new Group(fellow);
   obs=new Group();

 for (var i = 0; i < 10; i++){
   var mate =createSprite(random(10,400),random(10,400),10,10)
    objects.add(mate);
    timer=5 ;
 }

  player_sprite= createSprite(100,284,10,10)
    player_sprite.shapeColor = color(255);
    player_sprite.rotateToDirection = true;
    player_sprite.maxSpeed = 2;
    player_sprite.friction = 0.03;
    //player control setting;

    for (var i = 0; i < 10; i++) {//stage 4 obstacles
       var c = createSprite(
         -100, random(height),
         random(25, 100), random(25, 100));
       c.shapeColor = color(random(200, 255));
       obs.add(c);
       obs.displace(player_sprite);
     }


  frameRate(60);
}

function draw() {

  player_sprite.overlap(objects,collect);
  //eat object
  clear();

  function one(){
    background(0);
    fill(255);
    textSize(20);
    text("힘들게 만나려고 했어.",120,300);
  //player_sprite.overlap(objects,collect);
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
    text("근데 다들 어디로 간거야.",120,300);
    if(frameCount==60&&fellowNum!=0){
      fellowNum--;
      frameCount=0;
    }
    time();
    if(goalNum<fellowNum){
    var mate =object_sprite=createSprite(random(10,400),random(10,400),10,10)
    objects.add(mate);
  }


  //player_sprite.overlap(objects,collect);
  }//stage two

  function three(){
    background(30);
    fill(210);
    textSize(10);
    text("이곳에선 나를 알아줄 사람이 많을것 같아서 좋았어.",150,300);
    //player_sprite.overlap(objects,collect);
    time()
    fill(125);
    if(spr1N){
    spr1 = createSprite(
    width/2, height/2, 150, 150);
    spr1N=0;
  }
    spr1.shapeColor = color(0);

    if (player_sprite.overlap(spr1)) {
    spr1.shapeColor = color(255);
    fellowNum++;
  }

  }//stage three



  function four(){//need collision interaction


    textSize(10);
    background(20);
    fill(200);
    rect(100,0,200,400);
    fill(0);
    textAlign(CENTER);
    text("오히려  나에게 짐이되지 않았다면 말야.\n그래서 오히려 내가피했었지",120,300);

  if(player_pos_reset<1 || (player_sprite.position.x<100) ||(player_sprite.position.x>300)){ //reset position only once
    player_sprite.position.x=200;
    player_sprite.position.y=10;
    player_pos_reset++;
  }


    for (var i = 0; i < obs.length; i++) {
      obs[i].position.x += obs[i].width * (fellowNum*0.01);
        if (obs[i].position.x > width) {
            obs[i].position.x = 0;
            }
          }
          obs.displace(player_sprite);

          if(frameCount==60){
            fellowNum-=10;
            frameCount=0;
          }
          if(fellowNum>0){
            fill(0);
            print(fellowNum,120,360);
          }



    spr1.remove();
    for (var i = objects.length; i--; objects[i].remove());
  }
//stage four


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
    timer=2;
  }
  if(stage==2 && timer==0){
    stage=3;
    timer=2;
  }
  if(stage==3 && timer==0){
    stage=4;
    timer=2;
  }
  control()
  drawSprites();
}

function control(){
  if (mouseIsPressed) {
    player_sprite.attractionPoint(1, mouseX, mouseY);
  }
  //print(objects.length);

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

function collect(player_sprite,object){
  //objects.remove(object);
  object.remove();
  fellowNum++;
  print("1");
  print("object= "+objects);
}

function NewSprites(){
  print("objectsLength= "+objects.length);
  mate=createSprite(random(10,400),random(10,400),10,10);
  objects.add(mate);

}
