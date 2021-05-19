const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divHeight=300;
var ground2;

function setup() {
  createCanvas(480,550);


  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  

  for(k=0; k<=width; k=k+80){
    divisions.push(new division(k,height-divHeight/2,10,divHeight));
}

  for(j=0; j<=width; j=j+50){
    plinkos.push(new plinko(j,50,10))
  }

  for(j=15; j<=width-10; j=j+50){
    plinkos.push(new plinko(j,100,10))
  }

  for(j=45; j<=width-5; j=j+50){
  plinkos.push(new plinko(j,150,10))
  }

  for(j=5; j<=width-20; j=j+50){
    plinkos.push(new plinko(j,200,10));
  }

  
  ground2=new Ground(300,540,600,20);
  
}

function draw() {
  background(0);  
  drawSprites();
  

  if(frameCount%60===0){
    particles.push(new particle(random(100,150),10,10));
  }

 

  for(var a=0; a<particles.length; a++){
    particles[a].display();
  }

  for(j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  

  for(var k=0; k< divisions.length; k++){
    divisions[k].display();
  }

  
  
  ground2.display();

  Engine.update(engine);
}