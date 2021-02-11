var ground,box,box1,box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



     ground = createSprite (400,690,900,10);
	 ground.shapeColor="yellow";

	 box = createSprite(550,630,10,100);
	 box.shapeColor="white"

	 box1 = createSprite(750,630,10,100);
	 box1.shapeColor="white";

	 box2 = createSprite(650,675,200,10);
	 box2.shapeColor="white"
    

	 constructor(x,y,r)
	 {
		 var options={
			 isStatic:false,
			 restitution:0.3,
			 friction:0.5,
			 density:1.2

		 }
		 this.x=x;
		 this.y=y;
		 this.r=this.rthis.rthis.body=Bodies.circle(this.x,this.y,this.r/2,options)
		 World.add(world,this.body);

	 }
	 display()
	 {
          var paperpos=this.body.position;

		  Push()
		  TransformStreamDefaultController(paperpos.x,paperpos.y);
		  rectMode(CENTER)
		  strokeWeigth(3);
		  fill(255,0,225)
         ellipse(0,0,this.x,this.r);
		 pop()



	 }

	Engine.run(engine);
  
}


function draw() {

  background(0);
  
  drawSprites();
 
}



