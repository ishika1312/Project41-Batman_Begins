const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring global variables
var boyWithUmbrela;
var maxDrops = 100;
var drops = [];
var thunder;
var rand;

function preload(){
    //preloading images
    thunderbolt1 = loadImage("images/thunderbolt/1.png");
    thunderbolt2 = loadImage("images/thunderbolt/2.png");
    thunderbolt3 = loadImage("images/thunderbolt/3.png");
    thunderbolt4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(600, 1200);
    engine = Engine.create();
    world = engine.world;
   
    //creating a new umbrella object(i.e. young Bruce)
    boyWithUmbrela = new Umbrella(300, 870);

    //creating rain drops
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0, 600), random(0, 400)));
    }

    //creating a sprite to show the thunderbolt
    thunder = createSprite(300, 100, 10, 10);

    //randomly setting an image for the thunder bolt
    rand = Math.round(random(1, 4));

    switch(rand){
        case 1: thunder.addImage(thunderbolt1);
                break;
        case 2: thunder.addImage(thunderbolt2);
                break;
        case 3: thunder.addImage(thunderbolt3);
                break;
        case 4: thunder.addImage(thunderbolt4);
                break;
        default:break;
    }

    //setting a definite lifetime for the thunderbolt
    thunder.lifetime = 130;

}

function draw(){
    background("black");
    Engine.update(engine);

    //displaying the object(i.e. young Bruce)
    boyWithUmbrela.display();

    //displaying and updating the rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();

    }
    
    drawSprites();
    
}   

