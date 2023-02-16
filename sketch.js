const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rotator1,rotator2,rotator3;
var angle1, angle2, angle3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true

	}

	var particle_options = {
		restitution:0,4
		friction,0.02
	}

	function rotator1();
		World.add(world,rotator1);

	function rotator2();
		World.add(world,rotator2);

	function rotator3();
		World.add(world,rotator3);
	
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);

	drawSprites();

	Engine.update(engine);

	Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator2,angle2)
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=0.2;

	Matter.Body.rotate(rotator3,angle3)
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=0.2;
}

