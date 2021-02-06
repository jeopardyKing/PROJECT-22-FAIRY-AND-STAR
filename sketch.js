var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, windowHeight);

	

	fairy = createSprite(130, windowHeight-125);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
   star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 10 , {restitution:0.5});
	World.add(world, starBody);
    Matter.Body.setStatic(starBody,true)
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  //providing star sprite a position os star property
  star.x=starBody.position.x;
  star.y=starBody.position.y;

  //drawing starBody
  ellipseMode(RADIUS);
  ellipse(starBody.position.x,starBody.position.y,10,10);

  //control for fairy sprite
  if(keyDown(RIGHT_ARROW)){
	  fairy.velocityX=10;
  }
  if(keyDown(LEFT_ARROW)){
	fairy.velocityX=-10;
}
if(keyWentUp(RIGHT_ARROW)){
	fairy.velocityX=0;;
}
if(keyWentUp(LEFT_ARROW)){
  fairy.velocityX=0;
}

//making starbody fall amd star follow starbody
if(keyDown("space")){
	Matter.Body.setStatic(starBody,false)
}

if(starBody.position.y>fairy.y-40){
	Matter.Body.setStatic(starBody,true);
}



  drawSprites();

}

function keyPressed() {
	//write code here
}
