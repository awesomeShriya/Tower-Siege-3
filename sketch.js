const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var slingshot;
var score=0;
var bg="gray";

function preload(){
  getBackgroundimg();
  polygon_img=loadImage("Hexagon-PNG.png");
}
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 stand1 = new Ground(390,300,250,5);
 
 //level1
 fill("pink");
 block1 = new Block(300,275,30,40);
 block2 = new Block(330,275,30,40);
 block3 = new Block(360,275,30,40);
 block4 = new Block(390,275,30,40);
 block5 = new Block(420,275,30,40);
 block6 = new Block(450,275,30,40);
 block7 = new Block(480,275,30,40);

 //level2
 fill("lightBlue");
 block8 = new Block(330,235,30,40);
 block9 = new Block(360,235,30,40);
 block10 = new Block(390,235,30,40);
 block11 = new Block(420,235,30,40);
 block12 = new Block(450,235,30,40);

 //level3
 fill("pink");
 block13= new Block(360,195,30,40);
 block14= new Block(390,195,30,40);
 block15 = new Block(420,195,30,40);


 //level4
 fill("lightBlue");
 block16 = new Block(390,155,30,40);
 
 
 polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  if(bg)
  background(bg);

  fill("red");
  text("SCORE:"+score,700,40);
  
  
 // polygon.display();
  stand1.display();
  block1.display();
  block2.score();
  block2.display();
  block3.score();
  block3.display();
  block4.score();
  block4.display();
  block5.score();
  block5.display();
  block6.score();
  block6.display();
  block7.score();
  block7.display();
  block1.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
 
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

async function getBackgroundimg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/America/chicago");
  var responseJSON=await response.json();
  var dateTime=responseJSON.datetime;
  var hour=dateTime.slice(11,13)
  if(hour>=06&&hour<=19){
    console.log("day");
      //background(255,255,255);
      bg="lightBlue";
  }
  else{
    console.log("night");
      //background(0);
      bg="black";
  }

}