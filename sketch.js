const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload(){
PlayerBase = loadImage("./assets/base1.png");
player = loadImage("./assets/player.png");
ComputerPlayer = loadImage("./assets/player.png");
ComputerBase = loadImage("./assets/base2.png");


}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    PlayerBase.display
    ComputerBase.display
   //display Player and computerplayer
    player.display
    ComputerPlayer.display

}
