
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var tree;
var stone;
var ground;
var boy,boyImage;


function preload()
{
	boyImage= loadImage("images/project/boy.png")
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(550,400,300,300);
  stone = new Stone(40,600,100,100);
  rope= new Rope(stone.body,{x:140,y:650});
	mango1 = new Mango(650,400,50,50);
	mango2= new Mango(680,400,50,50);
	mango3= new Mango(620,450,50,50);
	mango4 = new Mango(690,500,50,50);
	mango5 = new Mango(620,500,60,50);
  console.log(stone.x);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  image(boyImage,100,600,200,200);


  
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  rope.display();

 
}


function keyPressed(){
	if(keyCode===32){	
  Matter.Body.setPosition(stone.body,{x:140,y:800})
	rope.attach(stone.body);

	}
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
  Matter.Body.setStatic(stone.body, false);
}

function mouseReleased(){
  rope.fly();
  Matter.Body.setStatic(stone.body, false);
}

function detectCollision(lstone,lmango){
  mangopos= lmango.body.position;
  stonepos= lstone.body.position;

  var distance =dist(mangopos.x,mangopos.y,stonepos.x,stonepos.y)
  if(distance<=lmango.r,lstone.r)
  {
    Matter.Body.setStatic(mango.body, false);
  }
}


