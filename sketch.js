
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj,groundObject	
var world,engine,paperBall;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paperBall = new Paper(200,640);

  
}


function draw() {
  rectMode(CENTER);
  background(225);
 Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperBall.display();
  
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});
}
}
