const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var groundObject,dustbinObject;

function preload() {
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(1300, 675);

	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(200,450,70);
	groundObject = new Ground(800,height,2000,30);
	dustbinObject = new Dustbin(1100,650,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paperObject.display();
  groundObject.display();
  dustbinObject.display();

  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:135,y:-145});
	 } 
	} 



