
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(400,690,800,20)
paper= new Paper(100,100,40)
	Engine.run(engine);
	dustbinLeft= new Dustbin(550,630,20,100)
	dustbinRight= new Dustbin(680,630,20,100)
	dustbinMiddle= new Dustbin(615,670,150,20)
  dustbinSprite= createSprite(615,600);
  dustbinSprite.addImage(dustbinImage);
  dustbinSprite.scale= 0.6
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-70})
	}
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("cyan");
  ground.display();
  paper.display();
  dustbinLeft.display();
  dustbinRight.display();
  dustbinMiddle.display();
  drawSprites();
 
}



