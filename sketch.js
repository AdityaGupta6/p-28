
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;
var stone;
var line;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,150,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1000,200,30);
	mango6=new mango(900,200,30);
	mango7=new mango(950,250,30);
	mango8=new mango(1100,20,30);
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(250,420,30)
     line1=new Line(stone.body,{x:250,y:420})



	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  textSize(30)
	text ('Press space to serve more',100,50)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  line1.display()
  stone.display()

  groundObject.display();

  collide(stone,mango1)
  collide(stone,mango2)
  collide(stone,mango3)
  collide(stone,mango4)
  collide(stone,mango5)
  collide(stone,mango6)
  collide(stone,mango7)
  collide(stone,mango8)

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
	  line1.fly()
	
}
function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:250,y:420})
		line1.attach(stone.body)

	}
}





function collide(lstone,lmango){
mPosition=lmango.body.position
sPosition=lstone.body.position

var distance =dist(sPosition.x,sPosition.y,mPosition.x,mPosition.y)

if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)

}

}







