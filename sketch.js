const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var polygon1, slingshot;

var gameState = "onSling";

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1= new Box(530, 235, 30, 40);
    box2= new Box(560, 235, 30, 40);
    box3= new Box(590, 235, 30, 40);
    box4= new Box(620, 235, 30, 40);
    box5= new Box(650, 235, 30, 40);
  
    box6= new Box(560, 195, 30, 40);
    box7= new Box(590, 195, 30, 40);
    box8= new Box(620, 195, 30, 40);
  
    box9= new Box(590, 155, 30, 40);

    polygon1 = new Polygon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon1.body,{x:200, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    polygon1.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon1.body);
    }
}