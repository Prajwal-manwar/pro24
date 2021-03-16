const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload() {}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 680, 1600, 20);

  //Create the Bodies Here.
  paper = new Paper(150, 650, 60);

  dustbin1 = new Dustbin(1200, 650, 150, 20);
  dustbin2 = new Dustbin(1110, 590, 20, 100);
  dustbin3 = new Dustbin(1290, 590, 20, 100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
  if  (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:180, y:-250});
  }
}