const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(930,370,70,70);
    box2 = new Box(1070,370,70,70);
    box3 = new Box(930,270,70,70);
    box4 = new Box(1070,270,70,70);
    box5 = new Box(1000,170,70,70);

    ground = new Ground(600,height,1200,20)

    pig1 = new pig(1000,370,50,50)
    pig2 = new pig(1000,270,50,50)

    log1 = new log(1000,350,200,PI/2)
    log2 = new log(1000,250,200,PI/2)
    log3 = new log(950,170,120,PI/7)
    log4 = new log(1050,170,120,-PI/7)

    bird1 = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();
}  