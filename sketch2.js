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
var newF;
var i=0;
var a;
var r;
var n;
var an;
var rn;
var nn;

function setup(){
   canvas = createCanvas(canvasWidth, canvasHeight);
   canvas.position(windowWidth/2-canvasWidth/2, 20);
   objects=new Group();
   fellows=new Group(fellow);
   obs=new Group();
   newF=new Group();
 for (var i = 0; i < 10; i++){
   var mate =createSprite(random(10,400),random(10,400),10,10)
    objects.add(mate);
    timer=10 ;
 }

  player_sprite= createSprite(100,284,10,10)
    player_sprite.shapeColor = color(255);
    player_sprite.rotateToDirection = true;
    player_sprite.maxSpeed = 2;
    player_sprite.friction = 0.03;
    //player control setting;

    for (var i = 0; i < 10; i++) {//stage 4 obstacles
       var c = createSprite(
         -100, random(50,300),
         random(25, 100), random(25, 100));
       c.shapeColor = color(random(200, 255));
       obs.add(c);
       obs.displace(player_sprite);
     }

    //stage 4 obstacles
        a = createSprite(-100, 0,10, 10);
          a.friction = 0.03;
         r = createSprite(-100, 200,10, 10);
         r.friction = 0.03;
         n = createSprite(-100, 400,10, 10);
         n.friction = 0.03;
         an = createSprite(500, 0,10, 10);
         an.friction = 0.03;
        rn = createSprite(500, 200,10, 10);
          rn.friction = 0.03;
       nn = createSprite(500, 400,10, 10);
        nn.friction = 0.03;


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
    text("근데 다들 어디로 간거야.",100,300);
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
    text("이곳에선 나를 알아줄 사람이 많을것 같아서 좋았어.",100,300);
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
    text("반대로 나에게 짐이되지 않았다면 말야.\n그래서 오히려 피했었지",200,300);

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
            if(fellowNum<=0 && timer!=0){
            timer--;
            }
            frameCount=0;
          }
          if(fellowNum>=0){
            fill(0);
            text(fellowNum,200,350);
          }
          text(timer,200,370);
      textSize(20)
      text("GOAL",200,390);
    spr1.remove();
    for (var i = objects.length; i--; objects[i].remove());
  }
//stage four
  function five(){
    fill(0);

    fellowNum=0;
    background(i);
    player_sprite.attractionPoint(1, 200,200);
    textAlign(CENTER);
    fill(255);
    if(timer>10)
    text("슬펐어.\n힘든일들을 겪었는데도 내 주위엔 아무도 없는 것같았어.",200,220)
    time();
    if(timer<10){
      text("그런데말이야..",200,220)
      a.attractionPoint(1, 200,200);
      r.attractionPoint(1, 200,200);
      n.attractionPoint(1, 200,200);
      an.attractionPoint(1, 200,200);
      rn.attractionPoint(1, 200,200);
      nn.attractionPoint(1, 200,200);
      fill(0);
      text(fellowNum,200,350);
      if(frameCount==20){
        i+=20
        fellowNum++;
        print(i);
    }
    if(i>150){
      fill(0);
      text("thx for play",200,250);

    }
  }
}


  if (stage == 1) {
    one();
   } else if (stage == 2) {
     two(); }
     else if (stage == 3) {
       three(); }
       else if (stage == 4) {
         four(); }
         else if (stage == 5) {
           five(); }
  if(stage==1 && timer==0){
    stage=2;
    timer=10;
  }
  if(stage==2 && timer==0){
    stage=3;
    timer=5;
  }
  if(stage==3 && timer==0){
    stage=4;
    timer=10;
  }
  if(stage==4 && timer==0){
    stage=5;
    timer=20;
  }
  control()
  drawSprites();
}

function control(){
  if (mouseIsPressed && stage!=5) {
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
  if(stage==4){
    fill(0)
  }
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
