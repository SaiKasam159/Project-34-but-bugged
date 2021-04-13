const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
 // rock = loadImage('images/rock.png')
  //trainSound = loadSound("sound/train.mp3");
  //crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  tram1 = new Tram(50, 170, 50, 50)
  tram2 = new Tram(100, 200, 50, 50)
  tram3 = new Tram(150, 200, 50, 50)
  tram4 = new Tram(200, 200, 50, 50)
  tram5 = new Tram(250, 200, 50, 50)
  tram6 = new Tram(300, 200, 50, 50)
  tram7 = new Tram(350, 200, 50, 50)
  tram8 = new Tram(400, 250, 50, 50)
  tram9 = new Tram(470, 250, 50, 50)

  rock1 = new Rock(1100, 200, 100, 100)

  hero = new Hero(50, 50, 50, 50)

  ground = new Ground(600,380,1200,20);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  tram1.display()

  tram1.display()
  tram2.display()
  tram3.display()
  tram4.display()
  tram5.display()
  tram6.display()
  tram7.display()
  tram8.display()
  tram9.display()

  hero.display()
 
  rock1.display()

}

  
function keyPressed(){
  if(keyCode === 32){

    console.log('yeet')
    bullet = new Bullet(mouseX, mouseY, 50, 50)
    bullet.display()
    Matter.Body.applyForce(bullet.body, {x : bullet.body.position.x, y : bullet.body.position.y}, {x: 0.5, y:0})
   // trainSound.play()
  }

}