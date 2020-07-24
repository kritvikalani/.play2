
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

var box1, box2, box3, paper

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  dustbin= new Box(690,610,100,100);
  paper= new Paper(50, 350, 40,50);
  ground= new Ground(400,670,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  /*box1.display();
  box2.display();
  box3.display();*/

  ground.display();
  paper.display();
  dustbin.display();

  console.log(dustbin.width)

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Body.applyForce(paper.body, paper.body.position, {x:270,y:-270});
  }
}