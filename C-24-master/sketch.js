// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as
const Engine = Matter.Engine

*/
var engine, world;
var ground, tanker, shootBall, bubbleBall;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,600 );
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200, 590, 3000, 40);
    tanker = new Tanker();
    shootBall = new ShootBall(tanker.body, {x:200, y:100})

   
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);

ground.display();
tanker.display();
shootBall.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}