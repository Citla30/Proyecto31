const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){
  t=loadImage("tablero.png");
  t2=loadImage("pink.png");
  t3=loadImage("pink2.png");
  t4=loadImage("pink3.png");
  t5=loadImage("pink4.png");
  a2=loadImage("ro2.png");
  p=loadImage("piezas.png");
  a=loadImage("avion.png");
  f=loadImage("fondo.png");
  b=loadImage("beth.png");
  e=loadImage("espacio.png");
  P1=loadImage("p1.png");
  P2=loadImage("p2.png");
  P3=loadImage("p2.png");
  estrella=loadImage("estrellas.png");
  ti=loadImage("titulo.png");
  texto1=loadImage("texto1.png");
  texto2=loadImage("texto2.png");
  texto3=loadImage("t3.png");
  texto4=loadImage("t4.png");
  texto5=loadImage("t5.png");
  GO=loadImage("Game over.png")
} 
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  T2 = createSprite(132,720);
  T2.addImage(t2);
  T2.scale=0.6;

  T3 = createSprite(320,720);
  T3.addImage(t3);
  T3.scale=0.6;

  T4 = createSprite(512,720);
  T4.addImage(t4);
  T4.scale=0.6;

  T5 = createSprite(697,720);
  T5.addImage(t5);
  T5.scale=0.6;
  
  repisa = Bodies.rectangle(570, 180, 250,20, {isStatic:true});
  World.add(world,repisa);
 
  repisa2=createSprite(580,90,300,20);
  repisa2.addImage(a2);
  repisa2.scale=0.35;

  golpe = Bodies.rectangle(750, 160, 100,20, {isStatic:true});
  World.add(world,golpe);
 
  golpe2=createSprite(750,160,100,20);
  golpe2.addImage(p);
  golpe2.scale=0.35;

  av = Bodies.rectangle(50, 400, 100,20, {isStatic:true});
  World.add(world,av);
 
  av2=createSprite(50,400,100,20);
  av2.addImage(a);
  av2.scale=0.5;

  //crea los objetos para dividir
  for (var k = 55; k <= 800; k = k + 170) {
    divisions.push(new Divisions(k, height-divisionHeight/6, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 145; j <=width; j=j+85) { 
    plinkos.push(new Plinko(j,520));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 100; j <=width-10; j=j+85) 
  {
    plinkos.push(new Plinko(j,220));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 100; j <=width; j=j+85) { 
    plinkos.push(new Plinko(j,345));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var j = 100; j <=width-10; j=j+85) 
  {
    plinkos.push(new Plinko(j,455));
  }

  for (var j = 145; j <=width-10; j=j+85) 
  {
    plinkos.push(new Plinko(j,280));
  }

  for (var j = 145; j <=width-10; j=j+85) 
  {
    plinkos.push(new Plinko(j,400));
  }

  //crea los objetos partícula
  for(var j = 50; j <=width-10; j=j+95){
    particles.push(new Particle(random(550,600),10,10));
  }
  
  fondo=createSprite(400,500);
  fondo.addImage(f);
  fondo.scale=1.5;

  Espacio=createSprite(400,280);
  Espacio.addImage(e);
  Espacio.scale=1.2;
  Espacio.visible=false;

  Avion=createSprite(650,400);
  Avion.addImage(a);
  Avion.visible=false;

  Planeta1=createSprite(450,500);
  Planeta1.addImage(P1);
  Planeta1.scale=0.2;
  Planeta1.visible=false;

  Planeta2=createSprite(270,100);
  Planeta2.addImage(P2);
  Planeta2.scale=0.1;
  Planeta2.visible=false;

  o1=createSprite(450,480);
  o1.addImage(a2);
  o1.scale=0.2;
  o1.visible=false;

  o2=createSprite(90,100);
  o2.addImage(a2);
  o2.scale=0.2;
  o2.visible=false;
  
  piso=createSprite(100,350,100,10);
  piso.shapeColor=("black");
  piso.visible=false;

  regalo=createSprite(280,300,50,20);
  regalo.visible=false;
  regalo.addImage(estrella);
  

  Beth=createSprite(100,250);
  Beth.addImage(b);
  Beth.scale=0.5;
  Beth.visible=false
  Beth.setCollider("rectangle",0,180,200,10);

  ground=createSprite(400,550,800,20);
  ground.visible=false;

  ground2=createSprite(400,50,800,20);
  ground2.visible=false;

  opA=createSprite(350,520);
  opA.addImage(e);
  opA.scale=0.2;

  opB=createSprite(700,580);
  opB.addImage(t);
  opB.scale=0.1;

  titulo=createSprite(470,750);
  titulo.addImage(ti);
  titulo.scale=0.8;
  
  Te1=createSprite(250,250);
  Te1.addImage(texto1);

  Te2=createSprite(400,300);
  Te2.addImage(texto2);
  Te2.scale=0.7;
  Te2.visible=false;

  Te3=createSprite(400,300);
  Te3.addImage(texto3);
  Te3.scale=0.7;
  Te3.visible=false;

  Te4=createSprite(400,300);
  Te4.addImage(texto4);
  Te4.scale=0.7;
  Te4.visible=false;

  go1=createSprite(430,150);
  go1.addImage(GO);
  go1.scale=0.7;
  go1.visible=false;

  Te5=createSprite(600,150);
  Te5.addImage(texto5);
  Te5.scale=0.6;
  Te5.visible=false;

}

function draw() {
  background(t);
  Engine.update(engine);
  //ground.display();
 
  golpe.position.x=golpe2.x;
  golpe.position.y=golpe2.y;

  av.position.x=av2.x;
  av.position.y=av2.y;

  if(Planeta1.y<100){
    Planeta1.velocityY=5;
  }

  if(Planeta1.y>490){
   Planeta1.velocityY=-5;
  }

  if(Planeta2.y<110){
    Planeta2.velocityY=5;
  }

  if(Planeta2.y>500){
   Planeta2.velocityY=-5;
  }

  if(o1.x>440){
    o1.velocityX=-5;
  }

  if(o1.x<150){
   o1.velocityX=5;
  }

  if(o2.x<100){
    o2.velocityX=5;
  }

  if(o2.x>550){
   o2.velocityX=-5;
  }
  if(mousePressedOver(Te2)){
    Te2.visible=false;
  }
  if(mousePressedOver(opB)){
    fondo.visible=false;
    opB.visible=false;
    opA.visible=false;
    titulo.visible=false;
    Te1.destroy();
    Te2.visible=true;
  }

  if(mousePressedOver(opA)){
    Te1.destroy();
    opB.visible=false;
    opA.visible=false;
    Planeta1.visible=true;
    Planeta2.visible=true;
    o1.visible=true;
    o2.visible=true;
    Beth.visible=true;
    Avion.visible=true;
    piso.visible=true;
    Espacio.visible=true;
    Te3.visible=true;
  }
  
  if(mousePressedOver(Te3)){
    Te3.visible=false;
  }

  if(Beth.isTouching(Planeta1)||Beth.isTouching(Planeta2)||Beth.isTouching(o1)||Beth.isTouching(o2)||Beth.isTouching(ground)||Beth.isTouching(ground2)){
    Planeta1.velocityY=0;
    Planeta2.velocityY=0;
    
    o1.velocityX=0;
    o2.velocityX=0;
    
    Beth.destroy();
    piso.destroy();
    
    Avion.velocityX=5;
    Avion.velocityY=-5;

    go1.visible=true;
    Te4.visible=true;
  }
  
  if(Beth.isTouching(Avion)){
    Beth.destroy();
    Avion.velocityX=5;
    Avion.velocityY=-5;
    piso.destroy();
    regalo.visible=true;
    Te5.visible=true;
  }

  if(keyDown ("M")){
    Beth.velocityY=-5;
  }

  if(keyDown ("LEFT_ARROW")){
    Beth.x=Beth.x-5;
  }

  if(keyDown ("RIGHT_ARROW")){
    Beth.x=Beth.x+5;
  }
  
  Beth.velocityY=Beth.velocityY + 0.3;
  
  if(Beth.isTouching(piso)){
    Beth.velocityY=0;
  }

  //muestra los plinkos 
 // for (var j = 0; j < plinkos.length; j++) {
   // plinkos[j].display();   
  //}
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();   
  }
 
  if(keyDown("K")){
    golpe2.x=golpe2.x-5;
    Matter.Body.setStatic(golpe,false);

    av2.velocityX=+4;
    Matter.Body.setStatic(av,false);
  }

  if(keyDown("L")){
    golpe2.x=golpe2.x+5;
    Matter.Body.setStatic(golpe,false);

    av2.velocityX=-4;
    Matter.Body.setStatic(av,false);
  }

drawSprites();
}
