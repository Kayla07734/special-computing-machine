const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var myTower;
var backgroundImg
var myGround

function preload() {
backgroundImg= loadImage("../C27-Ta-v4--main/assets/background.gif")

}

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world = engine.world;




  myTower = new Tower(120,280,150,300)
  myGround = new Ground(600,490,width,30)

}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);

  myTower.display()
  myGround.display()
 
}

